import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { openRouterDatacenterSchema, type OpenRouterDatacenter } from "../open-router-datacenter.js";

export type Datacenters = OpenRouterDatacenter[];

export const datacentersSchema: Schema<Datacenters> = s.of<Datacenters>(
  s.union([s.array(s.lazy(() => openRouterDatacenterSchema))]),
);
