import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeErrorSchema, type CodeError } from "./code-error.js";

export type BadRequestDetail = {
  /** Contains the list of errors in the request. */
  codeErrors?: CodeError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const badRequestDetailSchema: Schema<BadRequestDetail> = s.object<BadRequestDetail>(
  {
    codeErrors: s.optional(s.array(s.lazy(() => codeErrorSchema))),
  },
  { additionalProperties: s.json() },
);
