import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  objectRelmCrmDiscoveryApiSchema,
  type ObjectRelmCrmDiscoveryApi,
} from "./object-relm-crm-discovery-api.js";

export type SchemaDoc = {
  objects?: ObjectRelmCrmDiscoveryApi[];
  enumGroups?: Record<string, unknown>;
  listControls?: string[];
  notes?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaDocSchema: Schema<SchemaDoc> = s.object<SchemaDoc>(
  {
    objects: s.optional(s.array(s.lazy(() => objectRelmCrmDiscoveryApiSchema))),
    enumGroups: s.optional(s.record(s.string(), s.unknown())),
    listControls: s.optional(s.array(s.string())),
    notes: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      enumGroups: "enum_groups",
      listControls: "list_controls",
    },
  },
  { additionalProperties: s.json() },
);
