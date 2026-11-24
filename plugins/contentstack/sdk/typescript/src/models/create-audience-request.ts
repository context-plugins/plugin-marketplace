import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating or updating an audience. */
export type CreateAudienceRequest = {
  /** Display name for the audience. */
  name: string;
  /** Description of the audience targeting criteria. */
  description?: string;
  /** Logical conditions for audience membership. */
  rules?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAudienceRequestSchema: Schema<CreateAudienceRequest> = s.object<CreateAudienceRequest>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    rules: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
