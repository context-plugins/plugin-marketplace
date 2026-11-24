import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerGroupMemberSchema, type CustomerGroupMember } from "./customer-group-member.js";

export type CustomerGroupDetail = {
  id: string;
  name: string;
  description: string | null;
  customerCount: number;
  createdAt: Date;
  updatedAt: Date;
  customers: CustomerGroupMember[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerGroupDetailSchema: Schema<CustomerGroupDetail> = s.object<CustomerGroupDetail>(
  {
    id: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    customerCount: s.int(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    customers: s.array(s.lazy(() => customerGroupMemberSchema)),
  },
  { additionalProperties: s.json() },
);
