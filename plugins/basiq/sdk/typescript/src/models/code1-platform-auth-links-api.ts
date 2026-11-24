import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code, expressed as a string value. */
export const Code1PlatformAuthLinksApi = {
  UnauthorizedAccess: "unauthorized-access",
  InvalidAuthorizationToken: "invalid-authorization-token",
} as const;
export type Code1PlatformAuthLinksApi =
  | (typeof Code1PlatformAuthLinksApi)[keyof typeof Code1PlatformAuthLinksApi]
  | (string & {});

export const code1PlatformAuthLinksApiSchema: EnumSchema<Code1PlatformAuthLinksApi> =
  s.enumOf<Code1PlatformAuthLinksApi>(Code1PlatformAuthLinksApi);
