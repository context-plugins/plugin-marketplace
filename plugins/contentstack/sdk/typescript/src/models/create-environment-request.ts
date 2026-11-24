import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating or updating an environment. */
export type CreateEnvironmentRequest = {
  /** Display name for the environment. */
  name: string;
  /** Custom domain for the environment. */
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEnvironmentRequestSchema: Schema<CreateEnvironmentRequest> =
  s.object<CreateEnvironmentRequest>(
    {
      name: s.string(),
      domain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
