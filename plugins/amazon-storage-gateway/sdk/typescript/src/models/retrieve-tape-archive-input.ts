import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RetrieveTapeArchiveInput = {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual tape
   * shelf (VTS).
   */
  tapeArn: string;
  /**
   * The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to. Use the
   * ListGateways operation to return a list of gateways for your account and Amazon Web Services
   * Region. You retrieve archived virtual tapes to only one gateway and the gateway must be a tape
   * gateway.
   */
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retrieveTapeArchiveInputSchema: Schema<RetrieveTapeArchiveInput> =
  s.object<RetrieveTapeArchiveInput>(
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
