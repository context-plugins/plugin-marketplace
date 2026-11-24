import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Stats scoped only to web views. Not relevant for posts published only to email */
export type PostStatsWeb = {
  /** Total number of web views @default 0 */
  views?: number;
  /** Total number of web clicks @default 0 */
  clicks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postStatsWebSchema: Schema<PostStatsWeb> = s.object<PostStatsWeb>(
  {
    views: s.defaulted(s.int(), 0),
    clicks: s.defaulted(s.int(), 0),
  },
  { additionalProperties: s.json() },
);
