import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An array defining the eligible use cases for the mandate. For creditcard mandates, this field
 * will always be present and can contain one or both of the following values:
 */
export const MandateScopesResponse = {
  CustomerPresent: "customer-present",
  CustomerNotPresent: "customer-not-present",
} as const;
export type MandateScopesResponse =
  | (typeof MandateScopesResponse)[keyof typeof MandateScopesResponse]
  | (string & {});

export const mandateScopesResponseSchema: EnumSchema<MandateScopesResponse> =
  s.enumOf<MandateScopesResponse>(MandateScopesResponse);
