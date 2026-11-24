import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeErrorSchema, type CodeError } from "./code-error.js";

export type EvaluateCodeErrorDetail = {
  /** The error payload. */
  message?: string;
  /** Contains the list of CodeError objects. */
  codeErrors?: CodeError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evaluateCodeErrorDetailSchema: Schema<EvaluateCodeErrorDetail> =
  s.object<EvaluateCodeErrorDetail>(
    {
      message: s.optional(s.string()),
      codeErrors: s.optional(s.array(s.lazy(() => codeErrorSchema))),
    },
    { additionalProperties: s.json() },
  );
