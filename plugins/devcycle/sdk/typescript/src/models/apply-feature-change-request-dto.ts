import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApplyFeatureChangeRequestDto = {
  description: string;
  /** @default "applied" */
  action?: "applied";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const applyFeatureChangeRequestDtoProperties: s.Shape<ApplyFeatureChangeRequestDto> = {
  description: s.string(),
  action: s.defaulted(s.literal("applied"), "applied"),
};

export const applyFeatureChangeRequestDtoInternalSchema: Schema<ApplyFeatureChangeRequestDto> =
  s.object<ApplyFeatureChangeRequestDto>(applyFeatureChangeRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const applyFeatureChangeRequestDtoSchema: Schema<ApplyFeatureChangeRequestDto> = s.lazySchema(() =>
  s.object<ApplyFeatureChangeRequestDto>(
    {
      ...applyFeatureChangeRequestDtoProperties,
      description: s.string().check(s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
