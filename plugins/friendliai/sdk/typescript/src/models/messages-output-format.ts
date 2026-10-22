import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { schemaModelSchema, type SchemaModel } from "./unions/schema-model.js";
import { type41Schema, type Type41 } from "./unions/type41.js";

export type MessagesOutputFormat = {
  /** Output format type. Set to `json_schema` to constrain output to a JSON schema. */
  type?: Type41;
  /** JSON Schema object applied when `type` is `json_schema`. */
  schema?: SchemaModel;
};

export const messagesOutputFormatSchema: Schema<MessagesOutputFormat> = s.object<MessagesOutputFormat>({
  type: s.optional(s.lazy(() => type41Schema)),
  schema: s.optional(s.lazy(() => schemaModelSchema)),
});
