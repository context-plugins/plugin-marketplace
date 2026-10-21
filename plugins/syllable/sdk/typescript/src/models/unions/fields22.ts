import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { channelTargetPropertiesSchema, type ChannelTargetProperties } from "../channel-target-properties.js";

/** The fields to include in the response */
export type Fields22 = ChannelTargetProperties[];

export const fields22Schema: Schema<Fields22> = s.of<Fields22>(
  s.union([s.array(s.lazy(() => channelTargetPropertiesSchema))]),
);
