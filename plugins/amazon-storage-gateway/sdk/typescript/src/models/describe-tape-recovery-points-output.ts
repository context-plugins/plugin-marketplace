import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tapeRecoveryPointInfoSchema, type TapeRecoveryPointInfo } from "./tape-recovery-point-info.js";

export type DescribeTapeRecoveryPointsOutput = {
  gatewayArn?: string;
  /** An array of TapeRecoveryPointInfos that are available for the specified gateway. */
  tapeRecoveryPointInfos?: TapeRecoveryPointInfo[];
  /**
   * An opaque string that indicates the position at which the virtual tape recovery points that
   * were listed for description ended. Use this marker in your next request to list the next set of
   * virtual tape recovery points in the list. If there are no more recovery points to describe,
   * this field does not appear in the response.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTapeRecoveryPointsOutputSchema: Schema<DescribeTapeRecoveryPointsOutput> =
  s.object<DescribeTapeRecoveryPointsOutput>(
    {
      gatewayArn: s.optional(s.string()),
      tapeRecoveryPointInfos: s.optional(s.array(s.lazy(() => tapeRecoveryPointInfoSchema))),
      marker: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        tapeRecoveryPointInfos: "TapeRecoveryPointInfos",
        marker: "Marker",
      },
    },
    { additionalProperties: s.json() },
  );
