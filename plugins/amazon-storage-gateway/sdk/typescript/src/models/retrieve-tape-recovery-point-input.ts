import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RetrieveTapeRecoveryPointInput = {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the recovery
   * point.
   */
  tapeArn: string;
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retrieveTapeRecoveryPointInputSchema: Schema<RetrieveTapeRecoveryPointInput> =
  s.object<RetrieveTapeRecoveryPointInput>(
    {
      tapeArn: s.string(),
      gatewayArn: s.string(),
      _keysMap: {
        tapeArn: "TapeARN",
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
