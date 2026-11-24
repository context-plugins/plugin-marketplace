import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The primary object that was affected by this event. */
export type AuditLogEventResource = {
  /** The type of resource. */
  resourceType?: string;
  /** The subtype of resource. Most resources will not have a subtype. */
  resourceSubtype?: string;
  /** Globally unique identifier of the resource. */
  gid?: string;
  /** The name of the resource. */
  name?: string;
  /** The email of the resource, if applicable. */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogEventResourceSchema: Schema<AuditLogEventResource> = s.object<AuditLogEventResource>(
  {
    resourceType: s.optional(s.string()),
    resourceSubtype: s.optional(s.string()),
    gid: s.optional(s.string()),
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
    },
  },
  { additionalProperties: s.json() },
);
