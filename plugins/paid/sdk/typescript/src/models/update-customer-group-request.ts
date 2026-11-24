import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateCustomerGroupRequest = {
  name?: string;
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCustomerGroupRequestSchema: Schema<UpdateCustomerGroupRequest> =
  s.object<UpdateCustomerGroupRequest>(
    {
      name: s.optional(s.string()),
      description: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
