import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideAuctionComponents = {
  /** @default "hide_auction_components" */
  name?: "hide_auction_components";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideAuctionComponentsSchema: Schema<HideAuctionComponents> = s.object<HideAuctionComponents>(
  {
    name: s.defaulted(s.literal("hide_auction_components"), "hide_auction_components"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
