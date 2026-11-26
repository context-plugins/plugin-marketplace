import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { askResultInternalSchema, askResultSchema, type AskResult } from "./ask-result.js";
import { error1Schema, type Error1 } from "./error1.js";
import { intentSchema, type Intent } from "./intent.js";

export type AskResponse = {
  /** The query as sent. */
  query: string;
  /** How the request was interpreted and searched. */
  intent: Intent;
  /** Relevant results from every engine, best first, with duplicates merged. May be empty. */
  results: AskResult[];
  /** Engines that failed while others completed. The request is still charged. */
  errors: Error1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const askResponseProperties: s.Shape<AskResponse> = {
  query: s.string(),
  intent: intentSchema,
  results: s.array(s.lazy(() => askResultInternalSchema)),
  errors: s.array(s.lazy(() => error1Schema)),
};

export const askResponseInternalSchema: Schema<AskResponse> = s.object<AskResponse>(askResponseProperties, {
  additionalProperties: s.json(),
});

export const askResponseSchema: Schema<AskResponse> = s.lazySchema(() =>
  s.object<AskResponse>(
    {
      ...askResponseProperties,
      results: s.array(s.lazy(() => askResultSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
