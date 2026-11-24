import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShutdownGatewayOutput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shutdownGatewayOutputSchema: Schema<ShutdownGatewayOutput> = s.object<ShutdownGatewayOutput>(
  {
    gatewayArn: s.optional(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
    },
  },
  { additionalProperties: s.json() },
);
