import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An array defining the eligible use cases for the mandate. For creditcard mandates, this field
 * will always be present and can contain one or both of the following values:
 */
export const MandateScopes = {
  CustomerPresent: "customer-present",
  CustomerNotPresent: "customer-not-present",
} as const;
export type MandateScopes = (typeof MandateScopes)[keyof typeof MandateScopes] | (string & {});

export const mandateScopesSchema: EnumSchema<MandateScopes> = s.enumOf<MandateScopes>(MandateScopes);
