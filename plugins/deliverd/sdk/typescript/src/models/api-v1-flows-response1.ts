import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flowSchema, type Flow } from "./flow.js";

export type ApiV1FlowsResponse1 = {
  flows: Flow[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1FlowsResponse1Schema: Schema<ApiV1FlowsResponse1> = s.object<ApiV1FlowsResponse1>(
  {
    flows: s.array(s.lazy(() => flowSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
