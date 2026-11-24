import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Timeline = {
  event: string;
  actor: string;
  actorType: string;
  resourceType: string | null;
  resourceId: string | null;
  at: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timelineSchema: Schema<Timeline> = s.object<Timeline>(
  {
    event: s.string(),
    actor: s.string(),
    actorType: s.string(),
    resourceType: s.nullable(s.string()),
    resourceId: s.nullable(s.string()),
    at: s.string(),
  },
  { additionalProperties: s.json() },
);
