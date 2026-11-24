import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actorInternalSchema, actorSchema, type Actor } from "./actor.js";

/** The trigger that started this pipeline */
export type Trigger = {
  /** The type of trigger */
  type?: string;
  /** When the trigger was received */
  receivedAt?: Date;
  actor?: Actor;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const triggerProperties: s.Shape<Trigger> = {
  type: s.optional(s.string()),
  receivedAt: s.optional(s.dateTime()),
  actor: s.optional(s.lazy(() => actorInternalSchema)),
  _keysMap: {
    receivedAt: "received_at",
  },
};

export const triggerInternalSchema: Schema<Trigger> = s.object<Trigger>(triggerProperties, {
  additionalProperties: s.json(),
});

export const triggerSchema: Schema<Trigger> = s.lazySchema(() =>
  s.object<Trigger>(
    {
      ...triggerProperties,
      actor: s.optional(s.lazy(() => actorSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
