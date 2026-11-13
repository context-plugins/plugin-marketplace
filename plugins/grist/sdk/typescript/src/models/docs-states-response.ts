import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type DocsStatesResponse = {
  states: State[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsStatesResponseSchema: Schema<DocsStatesResponse> = s.object<DocsStatesResponse>(
  {
    states: s.array(s.lazy(() => stateSchema)),
  },
  { additionalProperties: s.json() },
);
