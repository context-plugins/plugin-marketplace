import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FapiMode = {
  Fapi1Advanced: "FAPI1_ADVANCED",
  Fapi1Baseline: "FAPI1_BASELINE",
  Fapi2MessageSigningAuthReq: "FAPI2_MESSAGE_SIGNING_AUTH_REQ",
  Fapi2MessageSigningAuthRes: "FAPI2_MESSAGE_SIGNING_AUTH_RES",
  Fapi2MessageSigningIntrospectionRes: "FAPI2_MESSAGE_SIGNING_INTROSPECTION_RES",
  Fapi2Security: "FAPI2_SECURITY",
} as const;
export type FapiMode = (typeof FapiMode)[keyof typeof FapiMode] | (string & {});

export const fapiModeSchema: EnumSchema<FapiMode> = s.enumOf<FapiMode>(FapiMode);
