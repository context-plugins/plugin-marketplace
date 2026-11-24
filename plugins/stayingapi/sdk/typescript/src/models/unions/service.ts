import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Service = number;

export const serviceInternalSchema: Schema<Service> = s.of<Service>(s.union([s.float64()]));

export const serviceSchema: Schema<Service> = s.lazySchema(() =>
  s.of<Service>(s.union([s.float64().check(s.gte(0))])),
);
