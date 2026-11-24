import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request payload for creating a new test set */
export type CreateTestSetRequest = {
  /** Display name for the new test set */
  name: string;
  /** Optional description of the test set's purpose */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createTestSetRequestProperties: s.Shape<CreateTestSetRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
};

export const createTestSetRequestInternalSchema: Schema<CreateTestSetRequest> =
  s.object<CreateTestSetRequest>(createTestSetRequestProperties, { additionalProperties: s.json() });

export const createTestSetRequestSchema: Schema<CreateTestSetRequest> = s.lazySchema(() =>
  s.object<CreateTestSetRequest>(
    {
      ...createTestSetRequestProperties,
      name: s.string().check(s.maxLength(256)),
    },
    { additionalProperties: s.json() },
  ),
);
