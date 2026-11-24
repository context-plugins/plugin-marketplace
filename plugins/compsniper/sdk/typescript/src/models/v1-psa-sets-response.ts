import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item2Schema, type Item2 } from "./item2.js";

export type V1PsaSetsResponse = {
  keyword?: string;
  marketplace?: string;
  game?: string | null;
  page?: number;
  hasNextPage?: boolean;
  totalResults?: number;
  totalItems?: number;
  items?: Item2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PsaSetsResponseSchema: Schema<V1PsaSetsResponse> = s.object<V1PsaSetsResponse>(
  {
    keyword: s.optional(s.string()),
    marketplace: s.optional(s.string()),
    game: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    hasNextPage: s.optional(s.boolean()),
    totalResults: s.optional(s.int()),
    totalItems: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => item2Schema))),
  },
  { additionalProperties: s.json() },
);
