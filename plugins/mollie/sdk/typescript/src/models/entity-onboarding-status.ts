import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links17Schema, type Links17 } from "./links17.js";
import { onboardingStatusSchema, type OnboardingStatus } from "./onboarding-status.js";

export type EntityOnboardingStatus = {
  /**
   * Indicates the response contains an onboarding status object. Will always contain the string
   * `onboarding` for this resource type.
   */
  resource: string;
  /** The name of the organization. */
  name: string;
  status: OnboardingStatus;
  /** Whether the organization can receive payments. */
  canReceivePayments: boolean;
  /** Whether the organization can receive settlements to their external bank account. */
  canReceiveSettlements: boolean;
  /**
   * The sign up date time of the organization in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  signedUpAt: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links17;
};

export const entityOnboardingStatusSchema: Schema<EntityOnboardingStatus> = s.object<EntityOnboardingStatus>({
  resource: s.string(),
  name: s.string(),
  status: onboardingStatusSchema,
  canReceivePayments: s.boolean(),
  canReceiveSettlements: s.boolean(),
  signedUpAt: s.string(),
  links: links17Schema,
  _keysMap: {
    links: "_links",
  },
});
