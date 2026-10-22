import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Status of request in channel manager (see ChannelManagerStatus) */
export type ChannelManagerStatus1 = string;

export const channelManagerStatus1Schema: Schema<ChannelManagerStatus1> = s.of<ChannelManagerStatus1>(
  s.union([s.string()]),
);
