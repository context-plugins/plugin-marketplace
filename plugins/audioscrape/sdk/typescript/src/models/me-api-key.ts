import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MeApiKey = {
  id: number;
  keyName: string;
  /** Dated API version the key is pinned to (see `Audioscrape-Version`). */
  pinnedVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meApiKeySchema: Schema<MeApiKey> = s.object<MeApiKey>(
  {
    id: s.int(),
    keyName: s.string(),
    pinnedVersion: s.string(),
    _keysMap: {
      keyName: "key_name",
      pinnedVersion: "pinned_version",
    },
  },
  { additionalProperties: s.json() },
);
