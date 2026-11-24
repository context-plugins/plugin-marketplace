import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Resolves the client ip based on a custom header. */
export type GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm = {
  /** The index of the ip in the header. (By default, value is 0 if missing) */
  ipHeaderIndex?: number;
  /** The name of the header to extract the client ip from. */
  ipHeaderName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithmSchema: Schema<GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm> =
  s.object<GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm>(
    {
      ipHeaderIndex: s.optional(s.int()),
      ipHeaderName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
