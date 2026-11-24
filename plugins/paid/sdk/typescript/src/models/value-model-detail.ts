import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueModelContentSchema, type ValueModelContent } from "./value-model-content.js";

export type ValueModelDetail = {
  /** Value model version ID. */
  id: string;
  /** Monotonically increasing version number. */
  version: number;
  /** Full value model configuration: value types, formulas, signals, and overrides. */
  content: ValueModelContent;
  createdAt: Date;
  activatedAt: Date | null;
  effectiveFrom: Date | null;
  effectiveTo: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelDetailSchema: Schema<ValueModelDetail> = s.object<ValueModelDetail>(
  {
    id: s.string(),
    version: s.int(),
    content: valueModelContentSchema,
    createdAt: s.dateTime(),
    activatedAt: s.nullable(s.dateTime()),
    effectiveFrom: s.nullable(s.dateTime()),
    effectiveTo: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
