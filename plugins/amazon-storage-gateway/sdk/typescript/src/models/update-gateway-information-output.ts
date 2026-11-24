import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateGatewayInformationOutput = {
  gatewayArn?: string;
  /** The name you configured for your gateway. */
  gatewayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateGatewayInformationOutputSchema: Schema<UpdateGatewayInformationOutput> =
  s.object<UpdateGatewayInformationOutput>(
    {
      gatewayArn: s.optional(s.string()),
      gatewayName: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        gatewayName: "GatewayName",
      },
    },
    { additionalProperties: s.json() },
  );
