import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** The schema definition of a view within a table. */
export type ViewSchema = {
  /** The unique identifier of the view (starts with 'viw'). */
  id: string;
  /** The name of the view. */
  name: string;
  /** The type of the view. */
  type: Type1;
  /** If set, this is a personal view only visible to the specified user. */
  personalForUserId?: string;
  /**
   * The IDs of fields visible in this view. Only included if visibleFieldIds is requested via the
   * include parameter.
   */
  visibleFieldIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const viewSchemaSchema: Schema<ViewSchema> = s.object<ViewSchema>(
  {
    id: s.string(),
    name: s.string(),
    type: type1Schema,
    personalForUserId: s.optional(s.string()),
    visibleFieldIds: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
