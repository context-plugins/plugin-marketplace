import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivateGatewayOutput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activateGatewayOutputSchema: Schema<ActivateGatewayOutput> = s.object<ActivateGatewayOutput>(
  {
    gatewayArn: s.optional(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
    },
  },
  { additionalProperties: s.json() },
);
