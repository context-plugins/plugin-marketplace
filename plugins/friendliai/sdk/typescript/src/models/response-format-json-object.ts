import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseFormatJsonObject = {
  /** The type of the response format: `json_object`. @default "json_object" */
  type?: "json_object";
};

export const responseFormatJsonObjectSchema: Schema<ResponseFormatJsonObject> =
  s.object<ResponseFormatJsonObject>({
    type: s.defaulted(s.literal("json_object"), "json_object"),
  });
