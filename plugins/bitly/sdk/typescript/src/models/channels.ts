import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";

export type Channels = {
  channels?: Channel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelsSchema: Schema<Channels> = s.object<Channels>(
  {
    channels: s.optional(s.array(s.lazy(() => channelSchema))),
  },
  { additionalProperties: s.json() },
);
