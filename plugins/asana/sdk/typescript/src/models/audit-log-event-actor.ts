import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actorTypeSchema, type ActorType } from "./actor-type.js";

/** The entity that triggered the event. Will typically be a user. */
export type AuditLogEventActor = {
  /**
   * The type of actor. Can be one of `user`, `asana`, `asana_support`, `anonymous`, or
   * `external_administrator`.
   */
  actorType?: ActorType;
  /** Globally unique identifier of the actor, if it is a user. */
  gid?: string;
  /** The name of the actor, if it is a user. */
  name?: string;
  /** The email of the actor, if it is a user. */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogEventActorSchema: Schema<AuditLogEventActor> = s.object<AuditLogEventActor>(
  {
    actorType: s.optional(s.lazy(() => actorTypeSchema)),
    gid: s.optional(s.string()),
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    _keysMap: {
      actorType: "actor_type",
    },
  },
  { additionalProperties: s.json() },
);
