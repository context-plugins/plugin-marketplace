import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. MongoDB JSON mode to use for the stream. */
export const JsonMode = {
  MongodbJsonModeUnspecified: "MONGODB_JSON_MODE_UNSPECIFIED",
  Strict: "STRICT",
  Canonical: "CANONICAL",
} as const;
export type JsonMode = (typeof JsonMode)[keyof typeof JsonMode] | (string & {});

export const jsonModeSchema: EnumSchema<JsonMode> = s.enumOf<JsonMode>(JsonMode);
