import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Scale = number;

export const scaleInternalSchema: Schema<Scale> = s.of<Scale>(s.union([s.int()]));

export const scaleSchema: Schema<Scale> = s.lazySchema(() => s.of<Scale>(s.union([s.int().check(s.gte(0))])));
