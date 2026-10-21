import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select Manual to enter the key directly, or Secret to use a stored text secret */
export const V3AuthenticationKeyType = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type V3AuthenticationKeyType =
  | (typeof V3AuthenticationKeyType)[keyof typeof V3AuthenticationKeyType]
  | (string & {});

export const v3AuthenticationKeyTypeSchema: EnumSchema<V3AuthenticationKeyType> =
  s.enumOf<V3AuthenticationKeyType>(V3AuthenticationKeyType);
