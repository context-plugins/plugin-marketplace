import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { retryabilitySchema, type Retryability } from "./retryability.js";

export type Discord1 = {
  code?: string | null;
  errorMessage?: string | null;
  isTransient?: boolean | null;
  retryability?: Retryability | null;
  httpStatus?: number | null;
  meta?: Record<string, unknown>;
  userFacingMessage?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discord1Schema: Schema<Discord1> = s.object<Discord1>(
  {
    code: s.optionalNullable(s.string()),
    errorMessage: s.optionalNullable(s.string()),
    isTransient: s.optionalNullable(s.boolean()),
    retryability: s.optionalNullable(s.lazy(() => retryabilitySchema)),
    httpStatus: s.optionalNullable(s.float64()),
    meta: s.optional(s.record(s.string(), s.unknown())),
    userFacingMessage: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
