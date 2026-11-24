import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1CustomFilterResponse1 = {
  caseSensitive?: boolean;
  /** RFC 1123 timestamp, e.g. "Wed, 07 Oct 2020 21:15:47 GMT". */
  createdAt?: string;
  id?: string;
  input?: string;
  output?: string;
  /** RFC 1123 timestamp. */
  updatedAt?: string;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CustomFilterResponse1Schema: Schema<ApiV1CustomFilterResponse1> =
  s.object<ApiV1CustomFilterResponse1>(
    {
      caseSensitive: s.optional(s.boolean()),
      createdAt: s.optional(s.string()),
      id: s.optional(s.string()),
      input: s.optional(s.string()),
      output: s.optional(s.string()),
      updatedAt: s.optional(s.string()),
      usage: s.optional(s.lazy(() => usageSchema)),
      _keysMap: {
        caseSensitive: "case_sensitive",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
