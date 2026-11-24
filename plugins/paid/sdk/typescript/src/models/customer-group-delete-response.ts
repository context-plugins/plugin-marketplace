import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerGroupDeleteResponse = {
  deletedGroupId: string;
  unboundCustomerCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerGroupDeleteResponseSchema: Schema<CustomerGroupDeleteResponse> =
  s.object<CustomerGroupDeleteResponse>(
    {
      deletedGroupId: s.string(),
      unboundCustomerCount: s.int(),
    },
    { additionalProperties: s.json() },
  );
