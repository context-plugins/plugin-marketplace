import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdvertisementOpportunity = {
  /** The ID of the opportunity. */
  id: string;
  /** The name of the advertiser. */
  advertiserName: string;
  /** The amount you'll earn. */
  payoutRate: string;
  /** What kind of an ad it is. With or without logo. */
  advertisementKind: string;
  /** The earliest this ad can be sent. Measured in seconds since the Unix epoch. */
  sendByWindowStartAt: number;
  /** When this ad needs to be sent by. Measured in seconds since the Unix epoch. */
  sendByWindowEndAt: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const advertisementOpportunitySchema: Schema<AdvertisementOpportunity> =
  s.object<AdvertisementOpportunity>(
    {
      id: s.string(),
      advertiserName: s.string(),
      payoutRate: s.string(),
      advertisementKind: s.string(),
      sendByWindowStartAt: s.int(),
      sendByWindowEndAt: s.int(),
      _keysMap: {
        advertiserName: "advertiser_name",
        payoutRate: "payout_rate",
        advertisementKind: "advertisement_kind",
        sendByWindowStartAt: "send_by_window_start_at",
        sendByWindowEndAt: "send_by_window_end_at",
      },
    },
    { additionalProperties: s.json() },
  );
