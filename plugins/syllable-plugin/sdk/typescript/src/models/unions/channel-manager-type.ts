import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Type of the service used to facilitate the session */
export type ChannelManagerType = string;

export const channelManagerTypeSchema: Schema<ChannelManagerType> = s.of<ChannelManagerType>(
  s.union([s.string()]),
);
