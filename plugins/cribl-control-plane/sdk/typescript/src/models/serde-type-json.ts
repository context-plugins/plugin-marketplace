import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type7Schema, type Type7 } from "./type7.js";

export type SerdeTypeJson = {
  /** Parser or formatter type to use. */
  type?: Type7;
  /** Field containing text to be parsed */
  srcField?: string;
  /** Name of the field to add fields to. Extract mode only. */
  dstField?: string;
  /** List of fields to keep. Supports wildcards (*). Takes precedence over 'Fields to remove'. */
  keep?: string[];
  /**
   * List of fields to remove. Supports wildcards (*). Cannot remove fields that match 'Fields to
   * keep'.
   */
  remove?: string[];
  /**
   * Expression evaluated against {index, name, value} context. Return truthy to keep a field, or
   * falsy to remove it.
   */
  fieldFilterExpr?: string;
};

export const serdeTypeJsonSchema: Schema<SerdeTypeJson> = s.object<SerdeTypeJson>({
  type: s.optional(s.lazy(() => type7Schema)),
  srcField: s.optional(s.string()),
  dstField: s.optional(s.string()),
  keep: s.optional(s.array(s.string())),
  remove: s.optional(s.array(s.string())),
  fieldFilterExpr: s.optional(s.string()),
});
