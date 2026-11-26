import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bidOutputInternalSchema, bidOutputSchema, type BidOutput } from "./bid-output.js";

export type ListBidsResponse = {
  results: BidOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listBidsResponseProperties: s.Shape<ListBidsResponse> = {
  results: s.array(s.lazy(() => bidOutputInternalSchema)),
};

export const listBidsResponseInternalSchema: Schema<ListBidsResponse> = s.object<ListBidsResponse>(
  listBidsResponseProperties,
  { additionalProperties: s.json() },
);

export const listBidsResponseSchema: Schema<ListBidsResponse> = s.lazySchema(() =>
  s.object<ListBidsResponse>(
    {
      ...listBidsResponseProperties,
      results: s.array(s.lazy(() => bidOutputSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
