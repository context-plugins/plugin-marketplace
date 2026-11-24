import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qaAgentResponseSchema, type QaAgentResponse } from "./qa-agent-response.js";

export type PaginatedResponseQaAgentResponse = {
  items: QaAgentResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseQaAgentResponseSchema: Schema<PaginatedResponseQaAgentResponse> =
  s.object<PaginatedResponseQaAgentResponse>(
    {
      items: s.array(s.lazy(() => qaAgentResponseSchema)),
      total: s.int(),
      limit: s.int(),
      offset: s.int(),
    },
    { additionalProperties: s.json() },
  );
