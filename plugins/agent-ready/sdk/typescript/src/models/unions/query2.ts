import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { queryInternalSchema, querySchema, type Query } from "../query.js";
import { query1InternalSchema, query1Schema, type Query1 } from "../query1.js";

export type Query2 = string | Query | Query1;

export const query2InternalSchema: Schema<Query2> = s.of<Query2>(
  s.union([s.string(), s.lazy(() => queryInternalSchema), s.lazy(() => query1InternalSchema)]),
);

export const query2Schema: Schema<Query2> = s.lazySchema(() =>
  s.of<Query2>(
    s.union([
      s.string().check(s.minLength(1), s.maxLength(2000)),
      s.lazy(() => querySchema),
      s.lazy(() => query1Schema),
    ]),
  ),
);
