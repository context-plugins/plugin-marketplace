import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * API key the request was authenticated with. `null` when authenticated via session cookie (e.g.
 * logged-in browser hitting the API).
 */
export type MeApiKey1 = {
  id: number;
  keyName: string;
  /** Dated API version the key is pinned to (see `Audioscrape-Version`). */
  pinnedVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meApiKey1Schema: Schema<MeApiKey1> = s.object<MeApiKey1>(
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
