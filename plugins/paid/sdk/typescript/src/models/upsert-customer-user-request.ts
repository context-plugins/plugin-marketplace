import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerUserStatusSchema, type CustomerUserStatus } from "./customer-user-status.js";

export type UpsertCustomerUserRequest = {
  name?: string;
  email?: string | null;
  metadata?: Record<string, unknown> | null;
  status?: CustomerUserStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const upsertCustomerUserRequestProperties: s.Shape<UpsertCustomerUserRequest> = {
  name: s.optional(s.string()),
  email: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => customerUserStatusSchema)),
};

export const upsertCustomerUserRequestInternalSchema: Schema<UpsertCustomerUserRequest> =
  s.object<UpsertCustomerUserRequest>(upsertCustomerUserRequestProperties, {
    additionalProperties: s.json(),
  });

export const upsertCustomerUserRequestSchema: Schema<UpsertCustomerUserRequest> = s.lazySchema(() =>
  s.object<UpsertCustomerUserRequest>(
    {
      ...upsertCustomerUserRequestProperties,
      email: s.optionalNullable(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
