import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubmitFeatureChangeRequestDto = {
  description: string;
  reviewers: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submitFeatureChangeRequestDtoProperties: s.Shape<SubmitFeatureChangeRequestDto> = {
  description: s.string(),
  reviewers: s.array(s.string()),
};

export const submitFeatureChangeRequestDtoInternalSchema: Schema<SubmitFeatureChangeRequestDto> =
  s.object<SubmitFeatureChangeRequestDto>(submitFeatureChangeRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const submitFeatureChangeRequestDtoSchema: Schema<SubmitFeatureChangeRequestDto> = s.lazySchema(() =>
  s.object<SubmitFeatureChangeRequestDto>(
    {
      ...submitFeatureChangeRequestDtoProperties,
      description: s.string().check(s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
