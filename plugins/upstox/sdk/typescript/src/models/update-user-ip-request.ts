import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateUserIpRequest = {
  primaryIp?: string;
  secondaryIp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateUserIpRequestSchema: Schema<UpdateUserIpRequest> = s.object<UpdateUserIpRequest>(
  {
    primaryIp: s.optional(s.string()),
    secondaryIp: s.optional(s.string()),
    _keysMap: {
      primaryIp: "primary_ip",
      secondaryIp: "secondary_ip",
    },
  },
  { additionalProperties: s.json() },
);
