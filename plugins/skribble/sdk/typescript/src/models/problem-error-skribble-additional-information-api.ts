import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Error response envelope returned for all 4xx and 5xx responses with a JSON body. Follows a
 * Problem+JSON-style shape. The `key` field is optional and reserved for future use.
 */
export type ProblemErrorSkribbleAdditionalInformationApi = {
  /**
   * URI identifying the problem category. The host of this URI depends on the environment the
   * request was made against (e.g. `document-validation.skribble.com` and
   * `document-validation.skribble.de` for the production regions; other environments use their
   * respective hosts). Match on the path segment after `/problem/` rather than the full URI. Known
   * values:
   *
   * - `https://document-validation.skribble.com/problem/problem-with-message` — generic error with
   *   a message
   * - `https://document-validation.skribble.com/problem/entity-not-found` — requested resource does
   *   not exist
   * - `https://document-validation.skribble.com/problem/feature-not-enabled` — a required feature
   *   is not enabled for the business
   * - `https://document-validation.skribble.com/problem/constraint-violation` — request violates a
   *   domain constraint
   * - `https://document-validation.skribble.com/problem/limit-exceeded` — a usage limit was
   *   exceeded
   */
  type: string;
  /** HTTP method of the failing request. */
  method: string;
  /** Request URI of the failing request. */
  path: string;
  /** HTTP status code, mirroring the response status line. */
  status: number;
  /** Optional machine-readable error key. Reserved for future use. */
  key?: string;
  /** Human-readable error message. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const problemErrorSkribbleAdditionalInformationApiProperties: s.Shape<ProblemErrorSkribbleAdditionalInformationApi> =
  {
    type: s.string(),
    method: s.string(),
    path: s.string(),
    status: s.int(),
    key: s.optional(s.string()),
    message: s.string(),
  };

export const problemErrorSkribbleAdditionalInformationApiInternalSchema: Schema<ProblemErrorSkribbleAdditionalInformationApi> =
  s.object<ProblemErrorSkribbleAdditionalInformationApi>(
    problemErrorSkribbleAdditionalInformationApiProperties,
    { additionalProperties: s.json() },
  );

export const problemErrorSkribbleAdditionalInformationApiSchema: Schema<ProblemErrorSkribbleAdditionalInformationApi> =
  s.lazySchema(() =>
    s.object<ProblemErrorSkribbleAdditionalInformationApi>(
      {
        ...problemErrorSkribbleAdditionalInformationApiProperties,
        type: s.string().check(s.url()),
      },
      { additionalProperties: s.json() },
    ),
  );
