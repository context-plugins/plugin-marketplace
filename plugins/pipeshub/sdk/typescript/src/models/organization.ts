import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { addressSchema, type Address } from "./address.js";
import { onBoardingStatusSchema, type OnBoardingStatus } from "./on-boarding-status.js";

export type Organization = {
  /** Unique organization identifier */
  id: string;
  /** Unique slug for the organization */
  slug: string;
  /** Registered name */
  registeredName: string;
  /** Short name or display name */
  shortName?: string;
  /** Organization domain */
  domain: string;
  /** Contact email address */
  contactEmail: string;
  /** Type of account */
  accountType: AccountType;
  permanentAddress?: Address;
  /** Onboarding status */
  onBoardingStatus: OnBoardingStatus;
  /** Soft delete flag @default false */
  isDeleted?: boolean;
  /** Document version (MongoDB) */
  v: number;
  /** Creation timestamp (ISO 8601) */
  createdAt: Date;
  /** Last update timestamp (ISO 8601) */
  updatedAt: Date;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>({
  id: s.string(),
  slug: s.string(),
  registeredName: s.string(),
  shortName: s.optional(s.string()),
  domain: s.string(),
  contactEmail: s.string(),
  accountType: accountTypeSchema,
  permanentAddress: s.optional(s.lazy(() => addressSchema)),
  onBoardingStatus: onBoardingStatusSchema,
  isDeleted: s.defaulted(s.boolean(), false),
  v: s.int(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    id: "_id",
    v: "__v",
  },
});
