import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthTypeOptionsAuthTokensExtItems = {
  Secret: "secret",
} as const;
export type AuthTypeOptionsAuthTokensExtItems =
  | (typeof AuthTypeOptionsAuthTokensExtItems)[keyof typeof AuthTypeOptionsAuthTokensExtItems]
  | (string & {});

export const authTypeOptionsAuthTokensExtItemsSchema: EnumSchema<AuthTypeOptionsAuthTokensExtItems> =
  s.enumOf<AuthTypeOptionsAuthTokensExtItems>(AuthTypeOptionsAuthTokensExtItems);
