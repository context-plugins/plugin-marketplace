import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ObjectRelmCrmDiscoveryApi = {
  key?: string;
  idPrefix?: string | null;
  listFilters?: string[];
  fields?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectRelmCrmDiscoveryApiSchema: Schema<ObjectRelmCrmDiscoveryApi> =
  s.object<ObjectRelmCrmDiscoveryApi>(
    {
      key: s.optional(s.string()),
      idPrefix: s.optionalNullable(s.string()),
      listFilters: s.optional(s.array(s.string())),
      fields: s.optional(s.array(s.record(s.string(), s.unknown()))),
      _keysMap: {
        idPrefix: "id_prefix",
        listFilters: "list_filters",
      },
    },
    { additionalProperties: s.json() },
  );
