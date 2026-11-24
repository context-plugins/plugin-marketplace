import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind8Schema, type Kind8 } from "./kind8.js";

export type ApiV1TasksFindingsRequest = {
  /**
   * hypothesis, test, evidence, finding, conclusion, recommendation, decision, risk, question or
   * action. A decision is recorded as a suggestion until a person confirms it
   */
  kind: Kind8;
  title: string;
  /**
   * The substance, written to be read by a person. Not your reasoning — what you tested, saw or
   * concluded
   */
  body?: string;
  /** Short pieces of evidence: a log line, a claim value, a measurement */
  evidence?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksFindingsRequestProperties: s.Shape<ApiV1TasksFindingsRequest> = {
  kind: kind8Schema,
  title: s.string(),
  body: s.optional(s.string()),
  evidence: s.optional(s.array(s.string())),
};

export const apiV1TasksFindingsRequestInternalSchema: Schema<ApiV1TasksFindingsRequest> =
  s.object<ApiV1TasksFindingsRequest>(apiV1TasksFindingsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksFindingsRequestSchema: Schema<ApiV1TasksFindingsRequest> = s.lazySchema(() =>
  s.object<ApiV1TasksFindingsRequest>(
    {
      ...apiV1TasksFindingsRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      body: s.optional(s.string().check(s.maxLength(4000))),
      evidence: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(1000))).check(s.maxLength(10)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
