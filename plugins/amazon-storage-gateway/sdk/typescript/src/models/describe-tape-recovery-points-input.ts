import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTapeRecoveryPointsInput = {
  gatewayArn: string;
  /**
   * An opaque string that indicates the position at which to begin describing the virtual tape
   * recovery points.
   */
  marker?: string;
  /**
   * Specifies that the number of virtual tape recovery points that are described be limited to the
   * specified number.
   */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTapeRecoveryPointsInputSchema: Schema<DescribeTapeRecoveryPointsInput> =
  s.object<DescribeTapeRecoveryPointsInput>(
    {
      gatewayArn: s.string(),
      marker: s.optional(s.string()),
      limit: s.optional(s.int()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        marker: "Marker",
        limit: "Limit",
      },
    },
    { additionalProperties: s.json() },
  );
