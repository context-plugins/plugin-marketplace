import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { b64ImageItemSchema, type B64ImageItem } from "../b64-image-item.js";
import { urlImageItemSchema, type UrlImageItem } from "../url-image-item.js";

export type Data = UrlImageItem[] | B64ImageItem[];

export const dataSchema: Schema<Data> = s.of<Data>(
  s.union([s.array(s.lazy(() => urlImageItemSchema)), s.array(s.lazy(() => b64ImageItemSchema))]),
);
