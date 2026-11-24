import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeParallelAiExtractApiSchema,
  type TypeParallelAiExtractApi,
} from "./type-parallel-ai-extract-api.js";
import { detail1Schema, type Detail1 } from "./unions/detail1.js";

/** Human-readable message for a task. */
export type Warning = {
  /**
   * Type of warning. Note that adding new warning types is considered a backward-compatible change.
   */
  type: TypeParallelAiExtractApi;
  /** Human-readable message. */
  message: string;
  /** Optional detail supporting the warning. */
  detail?: Detail1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warningSchema: Schema<Warning> = s.object<Warning>(
  {
    type: typeParallelAiExtractApiSchema,
    message: s.string(),
    detail: s.optional(s.lazy(() => detail1Schema)),
  },
  { additionalProperties: s.json() },
);
