import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { detailSchema, type Detail } from "../detail.js";

/** An invalid request message or a legacy transcript link redirect */
export type Detail1 = string | Detail;

export const detail1Schema: Schema<Detail1> = s.of<Detail1>(
  s.union([s.string(), s.lazy(() => detailSchema)]),
);
