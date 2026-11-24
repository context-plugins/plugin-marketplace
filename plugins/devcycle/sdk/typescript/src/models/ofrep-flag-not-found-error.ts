import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Flag not found response */
export type OfrepFlagNotFoundError = {
  /** Feature flag key */
  key: string;
  /** @default "FLAG_NOT_FOUND" */
  errorCode?: "FLAG_NOT_FOUND";
  /** An error description for logging or other needs */
  errorDetails?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ofrepFlagNotFoundErrorProperties: s.Shape<OfrepFlagNotFoundError> = {
  key: s.string(),
  errorCode: s.defaulted(s.literal("FLAG_NOT_FOUND"), "FLAG_NOT_FOUND"),
  errorDetails: s.optional(s.string()),
};

export const ofrepFlagNotFoundErrorInternalSchema: Schema<OfrepFlagNotFoundError> =
  s.object<OfrepFlagNotFoundError>(ofrepFlagNotFoundErrorProperties, { additionalProperties: s.json() });

export const ofrepFlagNotFoundErrorSchema: Schema<OfrepFlagNotFoundError> = s.lazySchema(() =>
  s.object<OfrepFlagNotFoundError>(
    {
      ...ofrepFlagNotFoundErrorProperties,
      key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
