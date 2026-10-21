import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { channelPropertiesSchema, type ChannelProperties } from "../channel-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy21 = ChannelProperties;

export const orderBy21Schema: Schema<OrderBy21> = s.of<OrderBy21>(
  s.union([s.lazy(() => channelPropertiesSchema)]),
);
