import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsRecoverResponse = {
  /** The current recovery mode state of the document */
  recoveryMode: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsRecoverResponseSchema: Schema<DocsRecoverResponse> = s.object<DocsRecoverResponse>(
  {
    recoveryMode: s.boolean(),
  },
  { additionalProperties: s.json() },
);
