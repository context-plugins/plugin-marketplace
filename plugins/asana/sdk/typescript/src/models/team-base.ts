import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TeamBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the team. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamBaseSchema: Schema<TeamBase> = s.object<TeamBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
