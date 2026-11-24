import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Sadly, sometimes requests to the API are not successful. Failures can occur for a wide range of
 * reasons. In all cases, the API should return an HTTP Status Code that indicates the nature of the
 * failure, with a response body in JSON format containing additional information.
 *
 *
 * In the event of a server error the response body will contain an error phrase. These phrases are
 * automatically generated using the [node-asana-phrase
 * library](https://github.com/Asana/node-asana-phrase) and can be used by Asana support to quickly
 * look up the incident that caused the server error.
 */
export type ErrorResponseError = {
  errors?: Error[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  {
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  },
  { additionalProperties: s.json() },
);
