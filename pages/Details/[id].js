import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Details from "../../components/woveNews/Details/Details";

export default function Index() {
    const router = useRouter()
    const { id } = router.query;
    console.log("ID::",id);
    return (

        <Details courseId={id} />

    )
}
