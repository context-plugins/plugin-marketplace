import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request payload for creating a new requirement */
export type CreateRequirementRequest = {
  /** Display name for the new requirement */
  name: string;
  /** Detailed description of the requirement specification */
  description?: string;
  /** Optional external identifier for integration with third-party tools */
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequirementRequestProperties: s.Shape<CreateRequirementRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  externalId: s.optional(s.string()),
};

export const createRequirementRequestInternalSchema: Schema<CreateRequirementRequest> =
  s.object<CreateRequirementRequest>(createRequirementRequestProperties, { additionalProperties: s.json() });

export const createRequirementRequestSchema: Schema<CreateRequirementRequest> = s.lazySchema(() =>
  s.object<CreateRequirementRequest>(
    {
      ...createRequirementRequestProperties,
      name: s.string().check(s.maxLength(512)),
    },
    { additionalProperties: s.json() },
  ),
);
