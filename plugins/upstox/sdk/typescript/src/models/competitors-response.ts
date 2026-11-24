import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { competitorDataSchema, type CompetitorData } from "./competitor-data.js";
import { statusSchema, type Status } from "./status.js";

export type CompetitorsResponse = {
  status?: Status;
  data?: CompetitorData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const competitorsResponseSchema: Schema<CompetitorsResponse> = s.object<CompetitorsResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => competitorDataSchema))),
  },
  { additionalProperties: s.json() },
);
