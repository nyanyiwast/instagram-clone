import Dexie from "dexie";
import { version } from "react";

const db = new Dexie("insta-clone")
db.version(1).stores({
    bio: ",username, about",
    gallery: "++id, imgSrc"
})