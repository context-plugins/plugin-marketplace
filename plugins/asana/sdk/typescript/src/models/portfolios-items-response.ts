import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";

export type PortfoliosItemsResponse = {
  data?: ProjectCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosItemsResponseSchema: Schema<PortfoliosItemsResponse> =
  s.object<PortfoliosItemsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => projectCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
