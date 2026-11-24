import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AccessControlRequestRequest = {
  /** Email address requesting access @default "email" */
  email?: "email";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessControlRequestRequestSchema: Schema<AccessControlRequestRequest> =
  s.object<AccessControlRequestRequest>(
    {
      email: s.defaulted(s.literal("email"), "email"),
    },
    { additionalProperties: s.json() },
  );
