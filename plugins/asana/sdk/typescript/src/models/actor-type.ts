import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of actor. Can be one of `user`, `asana`, `asana_support`, `anonymous`, or
 * `external_administrator`.
 */
export const ActorType = {
  User: "user",
  Asana: "asana",
  AsanaSupport: "asana_support",
  Anonymous: "anonymous",
  ExternalAdministrator: "external_administrator",
} as const;
export type ActorType = (typeof ActorType)[keyof typeof ActorType] | (string & {});

export const actorTypeSchema: EnumSchema<ActorType> = s.enumOf<ActorType>(ActorType);
