import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnumsRequest = {
  group: string;
  value: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enumsRequestSchema: Schema<EnumsRequest> = s.object<EnumsRequest>(
  {
    group: s.string(),
    value: s.string(),
    label: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
