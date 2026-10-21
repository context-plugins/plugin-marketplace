import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { renameFieldSchema, type RenameField } from "./rename-field.js";

export type FunctionConfSchemaRename = {
  /**
   * Fields whose children will inherit the Rename fields and Rename expression operations. Supports
   * wildcards. If empty, only top-level fields will be renamed.
   */
  baseFields?: string[];
  /**
   * Set of key-value pairs to rename fields, where key is the current name and value is the new
   * name. Does not support internal fields.
   */
  rename?: RenameField[];
  /**
   * Optional JavaScript expression whose returned value will be used to rename fields. Use the
   * 'name' and 'value' global variables to access field names/values. Example:
   * `name.startsWith('data') ? name.toUpperCase() : name`. You can access other field values via
   * __e.<fieldName>.
   */
  renameExpr?: string;
  /**
   * For wildcards specified in Parent fields, sets the maximum depth within events to match and
   * rename fields. Enter `0` to match only top-level fields. Defaults to `5` levels down.
   */
  wildcardDepth?: number;
};

export const functionConfSchemaRenameSchema: Schema<FunctionConfSchemaRename> =
  s.object<FunctionConfSchemaRename>({
    baseFields: s.optional(s.array(s.string())),
    rename: s.optional(s.array(s.lazy(() => renameFieldSchema))),
    renameExpr: s.optional(s.string()),
    wildcardDepth: s.optional(s.int()),
  });
