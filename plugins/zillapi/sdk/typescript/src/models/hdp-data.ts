import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { homeInfoSchema, type HomeInfo } from "./home-info.js";

export type HdpData = {
  homeInfo?: HomeInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hdpDataSchema: Schema<HdpData> = s.object<HdpData>(
  {
    homeInfo: s.optional(s.lazy(() => homeInfoSchema)),
  },
  { additionalProperties: s.json() },
);
