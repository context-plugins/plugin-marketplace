import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShutdownGatewayInput = {
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shutdownGatewayInputSchema: Schema<ShutdownGatewayInput> = s.object<ShutdownGatewayInput>(
  {
    gatewayArn: s.string(),
    _keysMap: {
      gatewayArn: "GatewayARN",
    },
  },
  { additionalProperties: s.json() },
);
