import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the service used to facilitate the session */
export type ChannelManagerService = string;

export const channelManagerServiceSchema: Schema<ChannelManagerService> = s.of<ChannelManagerService>(
  s.union([s.string()]),
);
