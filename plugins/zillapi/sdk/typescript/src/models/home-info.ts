import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HomeInfo = {
  homeStatus?: string;
  daysOnZillow?: number;
  listingSubType?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const homeInfoSchema: Schema<HomeInfo> = s.object<HomeInfo>(
  {
    homeStatus: s.optional(s.string()),
    daysOnZillow: s.optional(s.int()),
    listingSubType: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      listingSubType: "listing_sub_type",
    },
  },
  { additionalProperties: s.json() },
);
