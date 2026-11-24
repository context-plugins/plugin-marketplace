import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jsonSingleErrorSchema, type JsonSingleError } from "./json-single-error.js";

/** An object representing a server error */
export type JsonErrorResponse = {
  /** The http status of the error */
  httpStatus?: number;
  /** Human readable description of the error */
  reasonPhrase?: string;
  /** A list of all the errors that the server reported */
  errors?: JsonSingleError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonErrorResponseSchema: Schema<JsonErrorResponse> = s.object<JsonErrorResponse>(
  {
    httpStatus: s.optional(s.int()),
    reasonPhrase: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => jsonSingleErrorSchema))),
  },
  { additionalProperties: s.json() },
);
