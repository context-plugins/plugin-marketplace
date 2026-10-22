import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Channel-manager-side ID of the session (different from session_id) */
export type ChannelManagerSid1 = string;

export const channelManagerSid1Schema: Schema<ChannelManagerSid1> = s.of<ChannelManagerSid1>(
  s.union([s.string()]),
);
