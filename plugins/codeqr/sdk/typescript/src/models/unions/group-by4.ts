import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  groupByCodeqrIoLinksApiSchema,
  type GroupByCodeqrIoLinksApi,
} from "../group-by-codeqr-io-links-api.js";
import { groupBy1Schema, type GroupBy1 } from "../group-by1.js";
import { groupBy2Schema, type GroupBy2 } from "../group-by2.js";
import { groupBy3Schema, type GroupBy3 } from "../group-by3.js";

/** The field to group the links by. */
export type GroupBy4 = GroupByCodeqrIoLinksApi | GroupBy1 | GroupBy2 | GroupBy3;

export const groupBy4Schema: Schema<GroupBy4> = s.of<GroupBy4>(
  s.union([
    s.lazy(() => groupByCodeqrIoLinksApiSchema),
    s.lazy(() => groupBy1Schema),
    s.lazy(() => groupBy2Schema),
    s.lazy(() => groupBy3Schema),
  ]),
);
