import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

export type ApiV1ActionsResponse1 = {
  actions: Action[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ActionsResponse1Schema: Schema<ApiV1ActionsResponse1> = s.object<ApiV1ActionsResponse1>(
  {
    actions: s.array(s.lazy(() => actionSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
