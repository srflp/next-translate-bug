import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";

export default function Dog() {
  return <div></div>;
}

Dog.layout = (page) => <MainLayout>{page}</MainLayout>;
