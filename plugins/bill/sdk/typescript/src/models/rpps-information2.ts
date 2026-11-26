import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RppsInformation2 = {
  /**
   * Your billing statement account number with the verified national vendor organization.
   *
   * This value must match the vendor `accountNumber` set while creating or updating a vendor.
   */
  accountNumber: string;
  /**
   * BILL-generated ID of the billing address for the verified national vendor organization. The
   * value begins with `0ra`. Each address is identified by a unique ID.
   */
  addressId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rppsInformation2Properties: s.Shape<RppsInformation2> = {
  accountNumber: s.string(),
  addressId: s.optional(s.string()),
};

export const rppsInformation2InternalSchema: Schema<RppsInformation2> = s.object<RppsInformation2>(
  rppsInformation2Properties,
  { additionalProperties: s.json() },
);

export const rppsInformation2Schema: Schema<RppsInformation2> = s.lazySchema(() =>
  s.object<RppsInformation2>(
    {
      ...rppsInformation2Properties,
      accountNumber: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
