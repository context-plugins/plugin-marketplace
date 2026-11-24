import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Group = {
  references?: Record<string, string>;
  name: string;
  guid: string;
  created: string;
  modified: string;
  isActive: boolean;
  role: string;
  organizationGuid: string;
  bsds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSchema: Schema<Group> = s.object<Group>(
  {
    references: s.optional(s.record(s.string(), s.string())),
    name: s.string(),
    guid: s.string(),
    created: s.string(),
    modified: s.string(),
    isActive: s.boolean(),
    role: s.string(),
    organizationGuid: s.string(),
    bsds: s.array(s.string()),
    _keysMap: {
      isActive: "is_active",
      organizationGuid: "organization_guid",
    },
  },
  { additionalProperties: s.json() },
);
