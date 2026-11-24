import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { strictSchema, type Strict } from "./unions/strict.js";

/** JSON Schema output format: the response's output text conforms to `schema`. */
export type ResponseFormatTextJsonSchemaConfig = {
  name: string;
  schema: Record<string, unknown>;
  /** @default "json_schema" */
  type?: "json_schema";
  description?: Description;
  strict?: Strict;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseFormatTextJsonSchemaConfigSchema: Schema<ResponseFormatTextJsonSchemaConfig> =
  s.object<ResponseFormatTextJsonSchemaConfig>(
    {
      name: s.string(),
      schema: s.record(s.string(), s.unknown()),
      type: s.defaulted(s.literal("json_schema"), "json_schema"),
      description: s.optional(s.lazy(() => descriptionSchema)),
      strict: s.optional(s.lazy(() => strictSchema)),
    },
    { additionalProperties: s.json() },
  );
