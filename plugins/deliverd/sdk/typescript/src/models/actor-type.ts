import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** What kind of actor. */
export const ActorType = {
  User: "user",
  Agent: "agent",
  ApiKey: "api_key",
  Link: "link",
  Guest: "guest",
  System: "system",
} as const;
export type ActorType = (typeof ActorType)[keyof typeof ActorType] | (string & {});

export const actorTypeSchema: EnumSchema<ActorType> = s.enumOf<ActorType>(ActorType);
