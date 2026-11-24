import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of actor that made this change. */
export const ActorType = {
  ActorTypeUnspecified: "ACTOR_TYPE_UNSPECIFIED",
  User: "USER",
  System: "SYSTEM",
  Support: "SUPPORT",
} as const;
export type ActorType = (typeof ActorType)[keyof typeof ActorType] | (string & {});

export const actorTypeSchema: EnumSchema<ActorType> = s.enumOf<ActorType>(ActorType);
