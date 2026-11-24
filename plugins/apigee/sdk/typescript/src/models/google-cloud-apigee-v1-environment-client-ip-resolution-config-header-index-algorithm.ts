import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Resolves the client ip based on a custom header. */
export type GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm = {
  /** Required. The name of the header to extract the client ip from. */
  ipHeaderName?: string;
  /**
   * Required. The index of the ip in the header. Positive indices 0, 1, 2, 3 chooses indices from
   * the left (first ips) Negative indices -1, -2, -3 chooses indices from the right (last ips)
   */
  ipHeaderIndex?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmSchema: Schema<GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm> =
  s.object<GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm>(
    {
      ipHeaderName: s.optional(s.string()),
      ipHeaderIndex: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
