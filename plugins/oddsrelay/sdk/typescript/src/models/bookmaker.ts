import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marketSchema, type Market } from "./market.js";
import { lastUpdateSchema, type LastUpdate } from "./unions/last-update.js";

export type Bookmaker = {
  key: string;
  title: string;
  region: string;
  /** The newest `last_update` of the venue's markets. */
  lastUpdate: LastUpdate | null;
  /** `includeLinks=true` only. */
  link?: string;
  markets: Market[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bookmakerSchema: Schema<Bookmaker> = s.object<Bookmaker>(
  {
    key: s.string(),
    title: s.string(),
    region: s.string(),
    lastUpdate: s.nullable(s.lazy(() => lastUpdateSchema)),
    link: s.optional(s.string()),
    markets: s.array(s.lazy(() => marketSchema)),
    _keysMap: {
      lastUpdate: "last_update",
    },
  },
  { additionalProperties: s.json() },
);
