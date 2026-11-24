import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type AuctionTabText = {
  /** @default "auction_tab_text" */
  name?: "auction_tab_text";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auctionTabTextSchema: Schema<AuctionTabText> = s.object<AuctionTabText>(
  {
    name: s.defaulted(s.literal("auction_tab_text"), "auction_tab_text"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
