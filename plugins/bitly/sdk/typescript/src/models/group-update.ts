import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GroupUpdate = {
  name?: string;
  organizationGuid?: string;
  bsds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupUpdateSchema: Schema<GroupUpdate> = s.object<GroupUpdate>(
  {
    name: s.optional(s.string()),
    organizationGuid: s.optional(s.string()),
    bsds: s.optional(s.array(s.string())),
    _keysMap: {
      organizationGuid: "organization_guid",
    },
  },
  { additionalProperties: s.json() },
);
