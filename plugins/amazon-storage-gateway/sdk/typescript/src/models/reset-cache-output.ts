import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResetCacheOutput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resetCacheOutputSchema: Schema<ResetCacheOutput> = s.object<ResetCacheOutput>(
  {
    gatewayArn: s.optional(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
    },
  },
  { additionalProperties: s.json() },
);
