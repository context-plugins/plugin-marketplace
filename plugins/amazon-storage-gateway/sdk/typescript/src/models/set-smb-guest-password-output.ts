import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SetSmbGuestPasswordOutput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setSmbGuestPasswordOutputSchema: Schema<SetSmbGuestPasswordOutput> =
  s.object<SetSmbGuestPasswordOutput>(
    {
      gatewayArn: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
