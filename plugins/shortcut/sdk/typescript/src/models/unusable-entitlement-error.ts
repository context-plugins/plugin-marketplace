import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnusableEntitlementError = {
  /** The tag for violating an entitlement action. @default "entitlement-violation" */
  reasonTag?: "entitlement-violation";
  /** Short tag describing the unusable entitlement action taken by the user. */
  entitlementTag: string;
  /** Message displayed to the user on why their action failed. */
  message: string;
};

const unusableEntitlementErrorProperties: s.Shape<UnusableEntitlementError> = {
  reasonTag: s.defaulted(s.literal("entitlement-violation"), "entitlement-violation"),
  entitlementTag: s.string(),
  message: s.string(),
  _keysMap: {
    reasonTag: "reason_tag",
    entitlementTag: "entitlement_tag",
  },
};

export const unusableEntitlementErrorInternalSchema: Schema<UnusableEntitlementError> =
  s.object<UnusableEntitlementError>(unusableEntitlementErrorProperties);

export const unusableEntitlementErrorSchema: Schema<UnusableEntitlementError> = s.lazySchema(() =>
  s.object<UnusableEntitlementError>({
    ...unusableEntitlementErrorProperties,
    entitlementTag: s.string().check(s.minLength(1), s.maxLength(63)),
    message: s.string().check(s.minLength(1), s.maxLength(256)),
  }),
);
