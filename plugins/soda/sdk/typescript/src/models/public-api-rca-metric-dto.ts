import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiRcaMetricDto = {
  label: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaMetricDtoSchema: Schema<PublicApiRcaMetricDto> = s.object<PublicApiRcaMetricDto>(
  {
    label: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
