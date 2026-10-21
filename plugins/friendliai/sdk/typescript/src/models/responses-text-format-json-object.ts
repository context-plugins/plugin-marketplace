import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesTextFormatJsonObject = {
  /** The type of response format being defined. Always `json_object`. @default "json_object" */
  type?: "json_object";
};

export const responsesTextFormatJsonObjectSchema: Schema<ResponsesTextFormatJsonObject> =
  s.object<ResponsesTextFormatJsonObject>({
    type: s.defaulted(s.literal("json_object"), "json_object"),
  });
