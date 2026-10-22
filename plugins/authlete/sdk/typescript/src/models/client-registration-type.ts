import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Values for the `client_registration_types` RP metadata and the
 * `client_registration_types_supported` OP metadata that are defined in [OpenID Connect Federation
 * 1.0](https://openid.net/specs/openid-connect-federation-1_0.html).
 */
export const ClientRegistrationType = {
  Automatic: "AUTOMATIC",
  Explicit: "EXPLICIT",
} as const;
export type ClientRegistrationType =
  | (typeof ClientRegistrationType)[keyof typeof ClientRegistrationType]
  | (string & {});

export const clientRegistrationTypeSchema: EnumSchema<ClientRegistrationType> =
  s.enumOf<ClientRegistrationType>(ClientRegistrationType);
