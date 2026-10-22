import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detail1Schema, type Detail1 } from "./unions/detail1.js";

export type ApiV1Sessions400Error = {
  /** An invalid request message or a legacy transcript link redirect */
  detail: Detail1;
};

export const apiV1Sessions400ErrorSchema: Schema<ApiV1Sessions400Error> = s.object<ApiV1Sessions400Error>({
  detail: detail1Schema,
});
