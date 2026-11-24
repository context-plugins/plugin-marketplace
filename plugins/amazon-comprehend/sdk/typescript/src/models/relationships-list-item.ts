import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type RelationshipsListItem = {
  /** Identifers of the child blocks. */
  ids?: string[];
  /** Only supported relationship is a child relationship. */
  type?: Type2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relationshipsListItemSchema: Schema<RelationshipsListItem> = s.object<RelationshipsListItem>(
  {
    ids: s.optional(s.array(s.string())),
    type: s.optional(s.lazy(() => type2Schema)),
    _keysMap: {
      ids: "Ids",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
