import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The case of an object name in an Amazon S3 bucket. For ClientSpecified, the client determines the
 * case sensitivity. For CaseSensitive, the gateway determines the case sensitivity. The default
 * value is ClientSpecified.
 */
export const CaseSensitivity = {
  ClientSpecified: "ClientSpecified",
  CaseSensitive: "CaseSensitive",
} as const;
export type CaseSensitivity = (typeof CaseSensitivity)[keyof typeof CaseSensitivity] | (string & {});

export const caseSensitivitySchema: EnumSchema<CaseSensitivity> = s.enumOf<CaseSensitivity>(CaseSensitivity);
