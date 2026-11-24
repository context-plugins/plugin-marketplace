import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Rule value DTO. */
export type RuleValueDto = {
  /** Value */
  value?: string;
  /** Display name */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleValueDtoSchema: Schema<RuleValueDto> = s.object<RuleValueDto>(
  {
    value: s.optional(s.string()),
    displayName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
