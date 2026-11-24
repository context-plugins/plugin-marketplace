import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AiSystemsModelChangeRequest = {
  provider?: string | null;
  model?: string | null;
  modelVersion?: string | null;
  /**
   * A digest of the new prompt (sha256:…, a commit, a version tag); null when it is no longer
   * recorded
   */
  promptHash?: string | null;
  /** A digest of the new guardrail configuration; null when it is no longer recorded */
  guardrailsHash?: string | null;
  /** What changed and why, for the record */
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AiSystemsModelChangeRequestProperties: s.Shape<ApiV1AiSystemsModelChangeRequest> = {
  provider: s.optionalNullable(s.string()),
  model: s.optionalNullable(s.string()),
  modelVersion: s.optionalNullable(s.string()),
  promptHash: s.optionalNullable(s.string()),
  guardrailsHash: s.optionalNullable(s.string()),
  note: s.optional(s.string()),
};

export const apiV1AiSystemsModelChangeRequestInternalSchema: Schema<ApiV1AiSystemsModelChangeRequest> =
  s.object<ApiV1AiSystemsModelChangeRequest>(apiV1AiSystemsModelChangeRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AiSystemsModelChangeRequestSchema: Schema<ApiV1AiSystemsModelChangeRequest> = s.lazySchema(
  () =>
    s.object<ApiV1AiSystemsModelChangeRequest>(
      {
        ...apiV1AiSystemsModelChangeRequestProperties,
        provider: s.optionalNullable(s.string().check(s.maxLength(120))),
        model: s.optionalNullable(s.string().check(s.maxLength(200))),
        modelVersion: s.optionalNullable(s.string().check(s.maxLength(120))),
        promptHash: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(200))),
        guardrailsHash: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(200))),
        note: s.optional(s.string().check(s.maxLength(2000))),
      },
      { additionalProperties: s.json() },
    ),
);
