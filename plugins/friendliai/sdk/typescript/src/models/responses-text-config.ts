import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { format1Schema, type Format1 } from "./unions/format1.js";

export type ResponsesTextConfig = {
  /**
   * An object specifying the format that the model must output. Configuring `{ "type":
   * "json_schema" }` enables Structured Outputs. The default format is `{ "type": "text" }`.
   */
  format?: Format1;
};

export const responsesTextConfigSchema: Schema<ResponsesTextConfig> = s.object<ResponsesTextConfig>({
  format: s.optional(s.lazy(() => format1Schema)),
});
