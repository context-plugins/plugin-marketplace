import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { aggregateSchema, type Aggregate } from "../aggregate.js";
import { aggregate1Schema, type Aggregate1 } from "../aggregate1.js";

/**
 * Fields or ranges to aggregate search results by. Requires a Tier 2 search plan; on Tier 1 the
 * field is accepted but aggregations are omitted from the response.
 */
export type Aggregate2 = Aggregate[] | Aggregate1[];

export const aggregate2Schema: Schema<Aggregate2> = s.of<Aggregate2>(
  s.union([s.array(s.lazy(() => aggregateSchema)), s.array(s.lazy(() => aggregate1Schema))]),
);
