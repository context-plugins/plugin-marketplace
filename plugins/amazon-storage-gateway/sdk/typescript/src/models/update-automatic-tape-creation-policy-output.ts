import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateAutomaticTapeCreationPolicyOutput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateAutomaticTapeCreationPolicyOutputSchema: Schema<UpdateAutomaticTapeCreationPolicyOutput> =
  s.object<UpdateAutomaticTapeCreationPolicyOutput>(
    {
      gatewayArn: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
