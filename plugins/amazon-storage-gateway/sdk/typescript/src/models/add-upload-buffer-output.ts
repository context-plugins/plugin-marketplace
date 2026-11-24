import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddUploadBufferOutput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addUploadBufferOutputSchema: Schema<AddUploadBufferOutput> = s.object<AddUploadBufferOutput>(
  {
    gatewayArn: s.optional(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
    },
  },
  { additionalProperties: s.json() },
);
