import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CodeBillV3VendorsApi = {
  /** Name */
  name?: string;
  /** Value */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeBillV3VendorsApiSchema: Schema<CodeBillV3VendorsApi> = s.object<CodeBillV3VendorsApi>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
