import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { depthSchema, type Depth } from "./depth.js";

export type DepthMap = {
  /** Bids */
  buy?: Depth[];
  /** Asks */
  sell?: Depth[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const depthMapSchema: Schema<DepthMap> = s.object<DepthMap>(
  {
    buy: s.optional(s.array(s.lazy(() => depthSchema))),
    sell: s.optional(s.array(s.lazy(() => depthSchema))),
  },
  { additionalProperties: s.json() },
);
