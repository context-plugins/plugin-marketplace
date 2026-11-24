import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

export type BulkUpdateRequest = {
  /** archive or edit_tags */
  action: Action;
  archive?: boolean;
  addTags?: string[];
  removeTags?: string[];
  /** this is limited to 100 bitlink ids */
  links?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkUpdateRequestSchema: Schema<BulkUpdateRequest> = s.object<BulkUpdateRequest>(
  {
    action: actionSchema,
    archive: s.optional(s.boolean()),
    addTags: s.optional(s.array(s.string())),
    removeTags: s.optional(s.array(s.string())),
    links: s.optional(s.array(s.string())),
    _keysMap: {
      addTags: "add_tags",
      removeTags: "remove_tags",
    },
  },
  { additionalProperties: s.json() },
);
