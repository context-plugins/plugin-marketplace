import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type ApiV1GovernanceIncidentsResponse = {
  items: Item[];
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GovernanceIncidentsResponseSchema: Schema<ApiV1GovernanceIncidentsResponse> =
  s.object<ApiV1GovernanceIncidentsResponse>(
    {
      items: s.array(s.lazy(() => itemSchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
