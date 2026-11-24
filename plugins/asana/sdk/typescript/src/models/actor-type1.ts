import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActorType1 = {
  User: "user",
  Asana: "asana",
  AsanaSupport: "asana_support",
  Anonymous: "anonymous",
  ExternalAdministrator: "external_administrator",
} as const;
export type ActorType1 = (typeof ActorType1)[keyof typeof ActorType1] | (string & {});

export const actorType1Schema: EnumSchema<ActorType1> = s.enumOf<ActorType1>(ActorType1);
