import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerUserStatusSchema, type CustomerUserStatus } from "./customer-user-status.js";

export type CustomerUser = {
  id: string;
  externalId: string;
  customerExternalId: string;
  name: string | null;
  email: string | null;
  metadata: Record<string, unknown> | null;
  status: CustomerUserStatus;
  created: boolean;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerUserSchema: Schema<CustomerUser> = s.object<CustomerUser>(
  {
    id: s.string(),
    externalId: s.string(),
    customerExternalId: s.string(),
    name: s.nullable(s.string()),
    email: s.nullable(s.string()),
    metadata: s.nullable(s.record(s.string(), s.unknown())),
    status: customerUserStatusSchema,
    created: s.boolean(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
