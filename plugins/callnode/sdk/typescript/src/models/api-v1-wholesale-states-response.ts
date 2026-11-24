import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type ApiV1WholesaleStatesResponse = {
  states?: State[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WholesaleStatesResponseSchema: Schema<ApiV1WholesaleStatesResponse> =
  s.object<ApiV1WholesaleStatesResponse>(
    {
      states: s.optional(s.array(s.lazy(() => stateSchema))),
    },
    { additionalProperties: s.json() },
  );
