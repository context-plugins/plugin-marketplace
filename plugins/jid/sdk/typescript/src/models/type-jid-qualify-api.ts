import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeJidQualifyApi = {
  Tor: "tor",
  HostingOrVpn: "hosting_or_vpn",
  Other: "other",
  Unknown: "unknown",
} as const;
export type TypeJidQualifyApi = (typeof TypeJidQualifyApi)[keyof typeof TypeJidQualifyApi] | (string & {});

export const typeJidQualifyApiSchema: EnumSchema<TypeJidQualifyApi> =
  s.enumOf<TypeJidQualifyApi>(TypeJidQualifyApi);
