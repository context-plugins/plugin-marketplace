import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type RadarCollection = {
  status: Status;
  reasons: string[];
  requiredChannels: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarCollectionSchema: Schema<RadarCollection> = s.object<RadarCollection>(
  {
    status: statusSchema,
    reasons: s.array(s.string()),
    requiredChannels: s.array(s.string()),
    _keysMap: {
      requiredChannels: "required_channels",
    },
  },
  { additionalProperties: s.json() },
);
