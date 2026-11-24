import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identity persistence status */
export const PersistenceStatus = {
  Active: "active",
  Archived: "archived",
  ActiveImmortal: "active-immortal",
} as const;
export type PersistenceStatus = (typeof PersistenceStatus)[keyof typeof PersistenceStatus] | (string & {});

export const persistenceStatusSchema: EnumSchema<PersistenceStatus> =
  s.enumOf<PersistenceStatus>(PersistenceStatus);
