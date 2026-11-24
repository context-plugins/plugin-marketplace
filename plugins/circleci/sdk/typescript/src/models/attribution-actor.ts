import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Who to attribute pipeline triggers to */
export const AttributionActor = {
  Current: "current",
  System: "system",
} as const;
export type AttributionActor = (typeof AttributionActor)[keyof typeof AttributionActor] | (string & {});

export const attributionActorSchema: EnumSchema<AttributionActor> =
  s.enumOf<AttributionActor>(AttributionActor);
