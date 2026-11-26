import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Dto for additional information needed when sending invite to organization in Rpps network. */
export type RppsInformation = {
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

const rppsInformationProperties: s.Shape<RppsInformation> = {
  accountNumber: s.string(),
  addressId: s.optional(s.string()),
};

export const rppsInformationInternalSchema: Schema<RppsInformation> = s.object<RppsInformation>(
  rppsInformationProperties,
  { additionalProperties: s.json() },
);

export const rppsInformationSchema: Schema<RppsInformation> = s.lazySchema(() =>
  s.object<RppsInformation>(
    {
      ...rppsInformationProperties,
      accountNumber: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
