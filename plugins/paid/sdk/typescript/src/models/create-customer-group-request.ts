import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateCustomerGroupRequest = {
  name: string;
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCustomerGroupRequestSchema: Schema<CreateCustomerGroupRequest> =
  s.object<CreateCustomerGroupRequest>(
    {
      name: s.string(),
      description: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
