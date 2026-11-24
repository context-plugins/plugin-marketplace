import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Flag not found response */
export type OfrepFlagNotFound = {
  /** Feature flag key */
  key: string;
  /** @default "FLAG_NOT_FOUND" */
  errorCode?: "FLAG_NOT_FOUND";
  /** An error description for logging or other needs */
  errorDetails?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ofrepFlagNotFoundProperties: s.Shape<OfrepFlagNotFound> = {
  key: s.string(),
  errorCode: s.defaulted(s.literal("FLAG_NOT_FOUND"), "FLAG_NOT_FOUND"),
  errorDetails: s.optional(s.string()),
};

export const ofrepFlagNotFoundInternalSchema: Schema<OfrepFlagNotFound> = s.object<OfrepFlagNotFound>(
  ofrepFlagNotFoundProperties,
  { additionalProperties: s.json() },
);

export const ofrepFlagNotFoundSchema: Schema<OfrepFlagNotFound> = s.lazySchema(() =>
  s.object<OfrepFlagNotFound>(
    {
      ...ofrepFlagNotFoundProperties,
      key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
