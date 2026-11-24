import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";

/** The top level error response. */
export type Error = {
  status: number;
  statusText: string;
  errors: ErrorDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    status: s.int(),
    statusText: s.string(),
    errors: s.array(s.lazy(() => errorDetailSchema)),
  },
  { additionalProperties: s.json() },
);
