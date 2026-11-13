import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnusableEntitlementErrorError = {
  /** The tag for violating an entitlement action. @default "entitlement-violation" */
  reasonTag?: "entitlement-violation";
  /** Short tag describing the unusable entitlement action taken by the user. */
  entitlementTag: string;
  /** Message displayed to the user on why their action failed. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const unusableEntitlementErrorErrorProperties: s.Shape<UnusableEntitlementErrorError> = {
  reasonTag: s.defaulted(s.literal("entitlement-violation"), "entitlement-violation"),
  entitlementTag: s.string(),
  message: s.string(),
  _keysMap: {
    reasonTag: "reason_tag",
    entitlementTag: "entitlement_tag",
  },
};

export const unusableEntitlementErrorErrorInternalSchema: Schema<UnusableEntitlementErrorError> =
  s.object<UnusableEntitlementErrorError>(unusableEntitlementErrorErrorProperties, {
    additionalProperties: s.json(),
  });

export const unusableEntitlementErrorErrorSchema: Schema<UnusableEntitlementErrorError> = s.lazySchema(() =>
  s.object<UnusableEntitlementErrorError>(
    {
      ...unusableEntitlementErrorErrorProperties,
      entitlementTag: s.string().check(s.minLength(1), s.maxLength(63)),
      message: s.string().check(s.minLength(1), s.maxLength(256)),
    },
    { additionalProperties: s.json() },
  ),
);
