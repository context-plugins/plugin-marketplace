import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelArchivalInput = {
  gatewayArn: string;
  /** The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving for. */
  tapeArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelArchivalInputSchema: Schema<CancelArchivalInput> = s.object<CancelArchivalInput>(
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
