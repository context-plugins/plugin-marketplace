import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter the OAuth secret directly, or select a stored text secret */
export const OAuthSecretSource = {
  Inline: "inline",
  Secret: "secret",
} as const;
export type OAuthSecretSource = (typeof OAuthSecretSource)[keyof typeof OAuthSecretSource] | (string & {});

export const oAuthSecretSourceSchema: EnumSchema<OAuthSecretSource> =
  s.enumOf<OAuthSecretSource>(OAuthSecretSource);
