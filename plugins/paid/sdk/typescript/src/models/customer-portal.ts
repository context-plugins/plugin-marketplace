import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerPortalStatusSchema, type CustomerPortalStatus } from "./customer-portal-status.js";

export type CustomerPortal = {
  id: string;
  customerId: string;
  url: string;
  status: CustomerPortalStatus;
  returnUrl: string | null;
  expiresAt: Date;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerPortalSchema: Schema<CustomerPortal> = s.object<CustomerPortal>(
  {
    id: s.string(),
    customerId: s.string(),
    url: s.string(),
    status: customerPortalStatusSchema,
    returnUrl: s.nullable(s.string()),
    expiresAt: s.dateTime(),
    createdAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
