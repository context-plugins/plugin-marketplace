import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  channelTargetOrderPropertiesSchema,
  type ChannelTargetOrderProperties,
} from "../channel-target-order-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy310 = ChannelTargetOrderProperties;

export const orderBy310Schema: Schema<OrderBy310> = s.of<OrderBy310>(
  s.union([s.lazy(() => channelTargetOrderPropertiesSchema)]),
);
