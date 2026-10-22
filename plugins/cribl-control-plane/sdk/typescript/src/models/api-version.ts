import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The API version to use for communicating with the server */
export const ApiVersion = {
  _684: "6.8.4",
  _832: "8.3.2",
  Custom: "custom",
} as const;
export type ApiVersion = (typeof ApiVersion)[keyof typeof ApiVersion] | (string & {});

export const apiVersionSchema: EnumSchema<ApiVersion> = s.enumOf<ApiVersion>(ApiVersion);
