import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Mailing instructions for check donations. Max 1000 characters. */
export type PublicCheckPayments = {
  /** @default "public_check_payments" */
  name?: "public_check_payments";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicCheckPaymentsProperties: s.Shape<PublicCheckPayments> = {
  name: s.defaulted(s.literal("public_check_payments"), "public_check_payments"),
  value: s.optionalNullable(s.string()),
};

export const publicCheckPaymentsInternalSchema: Schema<PublicCheckPayments> = s.object<PublicCheckPayments>(
  publicCheckPaymentsProperties,
  { additionalProperties: s.json() },
);

export const publicCheckPaymentsSchema: Schema<PublicCheckPayments> = s.lazySchema(() =>
  s.object<PublicCheckPayments>(
    {
      ...publicCheckPaymentsProperties,
      value: s.optionalNullable(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
