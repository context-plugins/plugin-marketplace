import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsApplyResponse = {
  /** The action number assigned */
  actionNum?: number;
  /** Return values from each action (e.g. new row IDs) */
  retValues?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsApplyResponseSchema: Schema<DocsApplyResponse> = s.object<DocsApplyResponse>(
  {
    actionNum: s.optional(s.int()),
    retValues: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
