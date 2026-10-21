import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional Elasticsearch version, used to format events. If not specified, will auto-discover
 * version.
 */
export const ElasticVersion = {
  Auto: "auto",
  _6: "6",
  _7: "7",
} as const;
export type ElasticVersion = (typeof ElasticVersion)[keyof typeof ElasticVersion] | (string & {});

export const elasticVersionSchema: EnumSchema<ElasticVersion> = s.enumOf<ElasticVersion>(ElasticVersion);
