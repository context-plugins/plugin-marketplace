import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessAddressSchema, type BusinessAddress } from "./business-address.js";
import { businessIdNoTypeSchema, type BusinessIdNoType } from "./business-id-no-type.js";

export type UsersRequest = {
  /** The end-users email address. Mandatory if mobile is not supplied. */
  email?: string;
  /**
   * The end-users mobile number, supplied in international format. +[country-code][mobileno].
   * Mandatory if email is not supplied.
   */
  mobile?: string;
  /** The end-users first name as an optional additional parameter. */
  firstName?: string;
  /** The end-users middle name as an optional additional parameter. */
  middleName?: string;
  /** The end-users last name as an optional additional parameter. */
  lastName?: string;
  /** The official name of the business. */
  businessName?: string;
  /**
   * This number is used to identify a business when they’re dealing with the government, other
   * businesses, and the public.
   */
  businessIdNo?: string;
  /** Type of business ID could be ABN Or ACN. */
  businessIdNoType?: BusinessIdNoType;
  businessAddress?: BusinessAddress;
  /**
   * Indicates if the business information provided is verified against the Australian Business
   * Register.
   */
  verificationStatus?: boolean;
  /** when the verification was done. */
  verificationDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersRequestSchema: Schema<UsersRequest> = s.object<UsersRequest>(
  {
    email: s.optional(s.string()),
    mobile: s.optional(s.string()),
    firstName: s.optional(s.string()),
    middleName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    businessName: s.optional(s.string()),
    businessIdNo: s.optional(s.string()),
    businessIdNoType: s.optional(s.lazy(() => businessIdNoTypeSchema)),
    businessAddress: s.optional(s.lazy(() => businessAddressSchema)),
    verificationStatus: s.optional(s.boolean()),
    verificationDate: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
