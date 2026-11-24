import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerGroupMember = {
  id: string;
  name: string;
  externalId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerGroupMemberSchema: Schema<CustomerGroupMember> = s.object<CustomerGroupMember>(
  {
    id: s.string(),
    name: s.string(),
    externalId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
