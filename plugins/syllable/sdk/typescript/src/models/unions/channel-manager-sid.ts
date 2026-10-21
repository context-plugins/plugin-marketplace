import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Channel manager SID */
export type ChannelManagerSid = string;

export const channelManagerSidSchema: Schema<ChannelManagerSid> = s.of<ChannelManagerSid>(
  s.union([s.string()]),
);
