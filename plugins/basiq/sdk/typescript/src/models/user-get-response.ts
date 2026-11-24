import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessAddressSchema, type BusinessAddress } from "./business-address.js";
import { businessIdNoTypeSchema, type BusinessIdNoType } from "./business-id-no-type.js";
import { getUserLinksSchema, type GetUserLinks } from "./get-user-links.js";
import { userGetAccountSchema, type UserGetAccount } from "./user-get-account.js";
import { userGetConnectionSchema, type UserGetConnection } from "./user-get-connection.js";

/** User object with details if the creation succeeded. */
export type UserGetResponse = {
  /** Always "user". */
  type: string;
  /** User identification. */
  id: string;
  /** User email or empty. */
  email: string;
  /** User mobile number, or empty. */
  mobile: string;
  /** Name, or empty. */
  name: string;
  /** firstName, or empty */
  firstName: string;
  /** middleName, or empty */
  middleName: string;
  /** lastName, or empty */
  lastName: string;
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
  /** Container object containing connection data. */
  connections: UserGetConnection;
  /** Container object containing account data. */
  accounts: UserGetAccount;
  /** Object containing links to resources. */
  links: GetUserLinks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userGetResponseProperties: s.Shape<UserGetResponse> = {
  type: s.string(),
  id: s.string(),
  email: s.string(),
  mobile: s.string(),
  name: s.string(),
  firstName: s.string(),
  middleName: s.string(),
  lastName: s.string(),
  businessName: s.optional(s.string()),
  businessIdNo: s.optional(s.string()),
  businessIdNoType: s.optional(s.lazy(() => businessIdNoTypeSchema)),
  businessAddress: s.optional(s.lazy(() => businessAddressSchema)),
  verificationStatus: s.optional(s.boolean()),
  verificationDate: s.optional(s.string()),
  connections: userGetConnectionSchema,
  accounts: userGetAccountSchema,
  links: getUserLinksSchema,
};

export const userGetResponseInternalSchema: Schema<UserGetResponse> = s.object<UserGetResponse>(
  userGetResponseProperties,
  { additionalProperties: s.json() },
);

export const userGetResponseSchema: Schema<UserGetResponse> = s.lazySchema(() =>
  s.object<UserGetResponse>(
    {
      ...userGetResponseProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
