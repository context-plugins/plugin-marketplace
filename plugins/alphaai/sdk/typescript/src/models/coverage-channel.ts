import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";

export type CoverageChannel = {
  channel: Channel;
  cadence: string;
  lastIngestedAt?: Date | null;
  staleAfterSeconds: number;
  stale: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverageChannelSchema: Schema<CoverageChannel> = s.object<CoverageChannel>(
  {
    channel: channelSchema,
    cadence: s.string(),
    lastIngestedAt: s.optionalNullable(s.dateTime()),
    staleAfterSeconds: s.int(),
    stale: s.boolean(),
    _keysMap: {
      lastIngestedAt: "last_ingested_at",
      staleAfterSeconds: "stale_after_seconds",
    },
  },
  { additionalProperties: s.json() },
);
