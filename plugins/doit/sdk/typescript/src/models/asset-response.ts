import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response returned after creating or updating an asset. */
export type AssetResponse = {
  accountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assetResponseSchema: Schema<AssetResponse> = s.object<AssetResponse>(
  {
    accountId: s.optional(s.string()),
    _keysMap: {
      accountId: "accountID",
    },
  },
  { additionalProperties: s.json() },
);
