import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code. */
export const Code1PlatformPayeesApi = {
  Unauthorized: "unauthorized",
  InvalidToken: "invalid-token",
} as const;
export type Code1PlatformPayeesApi =
  | (typeof Code1PlatformPayeesApi)[keyof typeof Code1PlatformPayeesApi]
  | (string & {});

export const code1PlatformPayeesApiSchema: EnumSchema<Code1PlatformPayeesApi> =
  s.enumOf<Code1PlatformPayeesApi>(Code1PlatformPayeesApi);
