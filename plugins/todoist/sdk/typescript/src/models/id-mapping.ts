import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IdMapping = {
  /** Legacy ID for the object. */
  oldId: string | null;
  /** Curent ID for the object. */
  newId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const idMappingSchema: Schema<IdMapping> = s.object<IdMapping>(
  {
    oldId: s.nullable(s.string()),
    newId: s.nullable(s.string()),
    _keysMap: {
      oldId: "old_id",
      newId: "new_id",
    },
  },
  { additionalProperties: s.json() },
);
