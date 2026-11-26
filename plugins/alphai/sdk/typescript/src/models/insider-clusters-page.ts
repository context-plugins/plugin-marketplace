import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  insiderClusterInternalSchema,
  insiderClusterSchema,
  type InsiderCluster,
} from "./insider-cluster.js";
import { insiderClustersMetaSchema, type InsiderClustersMeta } from "./insider-clusters-meta.js";

export type InsiderClustersPage = {
  results: InsiderCluster[];
  /** Opaque cursor for the next page (pass back with the same `sort`); `null` at the end. */
  nextCursor: string | null;
  meta: InsiderClustersMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insiderClustersPageProperties: s.Shape<InsiderClustersPage> = {
  results: s.array(s.lazy(() => insiderClusterInternalSchema)),
  nextCursor: s.nullable(s.string()),
  meta: insiderClustersMetaSchema,
  _keysMap: {
    nextCursor: "next_cursor",
  },
};

export const insiderClustersPageInternalSchema: Schema<InsiderClustersPage> = s.object<InsiderClustersPage>(
  insiderClustersPageProperties,
  { additionalProperties: s.json() },
);

export const insiderClustersPageSchema: Schema<InsiderClustersPage> = s.lazySchema(() =>
  s.object<InsiderClustersPage>(
    {
      ...insiderClustersPageProperties,
      results: s.array(s.lazy(() => insiderClusterSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
