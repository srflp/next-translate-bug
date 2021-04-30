import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function MainLayout({ children }) {
  const router = useRouter();

  const handleChange = (e) => router.push(router.pathname, router.pathname, { locale: e.target.value });
  const { t } = useTranslation();

  return (
    <>
      <div>
        <select
          defaultValue={router.locale}
          onChange={handleChange}
        >
          <option value="en">EN</option>
          <option value="pl">PL</option>
        </select>
      </div>
      <div>
        nav:
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/cat">
          <a>Cat</a>
        </Link>
        <Link href="/dog">
          <a>Dog</a>
        </Link>
        <div>translated pageTitle: {t(`${router.pathname.substring(1) || "home"}:pageTitle`)}</div>
        {children}
      </div>
    </>
  );
}
