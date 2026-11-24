import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { capabilitySchema, type Capability } from "./capability.js";
import { userSchema, type User } from "./user.js";

export type ApiV1CapabilitiesResponse = {
  /** Operations this key may call */
  capabilities: Capability[];
  /** The account the key belongs to */
  user: User;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CapabilitiesResponseSchema: Schema<ApiV1CapabilitiesResponse> =
  s.object<ApiV1CapabilitiesResponse>(
    {
      capabilities: s.array(s.lazy(() => capabilitySchema)),
      user: userSchema,
    },
    { additionalProperties: s.json() },
  );
