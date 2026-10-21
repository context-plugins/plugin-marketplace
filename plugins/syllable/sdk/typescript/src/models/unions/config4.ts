import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { channelConfigViewSchema, type ChannelConfigView } from "../channel-config-view.js";

/** Configuration for the channel */
export type Config4 = ChannelConfigView;

export const config4Schema: Schema<Config4> = s.of<Config4>(s.union([s.lazy(() => channelConfigViewSchema)]));
