import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The entity associated with the event that has occurred */
export const Entity = {
  Consent: "consent",
  Connection: "connection",
} as const;
export type Entity = (typeof Entity)[keyof typeof Entity] | (string & {});

export const entitySchema: EnumSchema<Entity> = s.enumOf<Entity>(Entity);
