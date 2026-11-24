import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListAutomaticTapeCreationPoliciesInput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAutomaticTapeCreationPoliciesInputSchema: Schema<ListAutomaticTapeCreationPoliciesInput> =
  s.object<ListAutomaticTapeCreationPoliciesInput>(
    {
      gatewayArn: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
