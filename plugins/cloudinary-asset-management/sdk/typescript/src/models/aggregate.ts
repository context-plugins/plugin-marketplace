import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Aggregate = {
  Format: "format",
  ResourceType: "resource_type",
  Type: "type",
} as const;
export type Aggregate = (typeof Aggregate)[keyof typeof Aggregate] | (string & {});

export const aggregateSchema: EnumSchema<Aggregate> = s.enumOf<Aggregate>(Aggregate);
