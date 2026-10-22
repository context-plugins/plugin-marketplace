import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { channelPropertiesSchema, type ChannelProperties } from "../channel-properties.js";

/** The fields to include in the response */
export type Fields2 = ChannelProperties[];

export const fields2Schema: Schema<Fields2> = s.of<Fields2>(
  s.union([s.array(s.lazy(() => channelPropertiesSchema))]),
);
