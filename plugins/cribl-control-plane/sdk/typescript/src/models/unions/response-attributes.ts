import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Names of attributes within the response that contain next-page information */
export type ResponseAttributes = string[] | string;

export const responseAttributesSchema: Schema<ResponseAttributes> = s.of<ResponseAttributes>(
  s.union([s.array(s.string()), s.string()]),
);
