import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AskRequest = {
  /**
   * What you are looking for, in natural language. Platform hints ("on Reddit", "papers") and time
   * hints ("this week") steer engine and time-range selection.
   */
  query: string;
};

const askRequestProperties: s.Shape<AskRequest> = {
  query: s.string(),
};

export const askRequestInternalSchema: Schema<AskRequest> = s.object<AskRequest>(askRequestProperties);

export const askRequestSchema: Schema<AskRequest> = s.lazySchema(() =>
  s.object<AskRequest>({
    ...askRequestProperties,
    query: s.string().check(s.minLength(1), s.maxLength(500)),
  }),
);
