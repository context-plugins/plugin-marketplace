import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueModelContentSchema, type ValueModelContent } from "./value-model-content.js";

export type ValueModelUploadRequest = {
  /** Full value model configuration: value types, formulas, signals, and overrides. */
  content: ValueModelContent;
  effectiveFrom?: Date;
  effectiveTo?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelUploadRequestSchema: Schema<ValueModelUploadRequest> =
  s.object<ValueModelUploadRequest>(
    {
      content: valueModelContentSchema,
      effectiveFrom: s.optional(s.dateTime()),
      effectiveTo: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
