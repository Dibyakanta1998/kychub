import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductDataType } from "../../types/Product";
import { Avatar, Table, TableColumnsType, TableProps } from "antd";

const Product: FC = () => {
  const { data, /* isError, */ isFetching, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<{ products: Array<ProductDataType> }> => {
      const response = await fetch("https://dummyjson.com/products");
      return await response.json();
    },
  });

  const columns: TableColumnsType<ProductDataType> = [
    {
      title: "",
      dataIndex: "thumbnail",

      // width: "30%",
      render: (val) => {
        return <Avatar size="default" src={val} />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "25%",

      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "50%",
    },
    {
      title: "Price",
      dataIndex: "price",
      // width: "40%",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Discount(%)",
      dataIndex: "discountPercentage",
      // width: "40%",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      // width: "40%",
    },
    {
      title: "Category",
      dataIndex: "category",
      // width: "40%",
    },
  ];

  const onChange: TableProps<ProductDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table<ProductDataType>
      columns={columns}
      size="large"
      dataSource={data?.products}
      onChange={onChange}
      loading={isFetching || isLoading}
      rowKey="id"
      pagination={{
        pageSize: 10,
      }}
    />
  );
};

export default Product;
