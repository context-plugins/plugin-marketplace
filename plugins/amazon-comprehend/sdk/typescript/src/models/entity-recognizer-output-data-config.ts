import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityRecognizerOutputDataConfig = {
  /** The Amazon S3 prefix for the data lake location of the flywheel statistics. */
  flywheelStatsS3Prefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerOutputDataConfigSchema: Schema<EntityRecognizerOutputDataConfig> =
  s.object<EntityRecognizerOutputDataConfig>(
    {
      flywheelStatsS3Prefix: s.optional(s.string()),
      _keysMap: {
        flywheelStatsS3Prefix: "FlywheelStatsS3Prefix",
      },
    },
    { additionalProperties: s.json() },
  );
