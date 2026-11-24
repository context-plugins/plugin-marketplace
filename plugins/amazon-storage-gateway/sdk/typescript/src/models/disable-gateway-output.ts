import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisableGatewayOutput = {
  /** The unique Amazon Resource Name (ARN) of the disabled gateway. */
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disableGatewayOutputSchema: Schema<DisableGatewayOutput> = s.object<DisableGatewayOutput>(
  {
    gatewayArn: s.optional(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
    },
  },
  { additionalProperties: s.json() },
);
