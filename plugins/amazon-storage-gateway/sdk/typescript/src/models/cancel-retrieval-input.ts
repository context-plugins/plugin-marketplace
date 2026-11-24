import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelRetrievalInput = {
  gatewayArn: string;
  /** The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval for. */
  tapeArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelRetrievalInputSchema: Schema<CancelRetrievalInput> = s.object<CancelRetrievalInput>(
  {
    gatewayArn: s.string(),
    tapeArn: s.string(),
    _keysMap: {
      gatewayArn: "GatewayARN",
      tapeArn: "TapeARN",
    },
  },
  { additionalProperties: s.json() },
);
