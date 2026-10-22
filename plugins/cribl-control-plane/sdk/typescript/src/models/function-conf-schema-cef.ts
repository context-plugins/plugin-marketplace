import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extensionFieldSchema, type ExtensionField } from "./extension-field.js";
import { headerFieldSchema, type HeaderField } from "./header-field.js";

export type FunctionConfSchemaCef = {
  /** The field to which the CEF formatted event will be output */
  outputField?: string;
  /** Set of header key/value pairs */
  header?: HeaderField[];
  /** Set of extension key-value pairs */
  extension?: ExtensionField[];
};

export const functionConfSchemaCefSchema: Schema<FunctionConfSchemaCef> = s.object<FunctionConfSchemaCef>({
  outputField: s.optional(s.string()),
  header: s.optional(s.array(s.lazy(() => headerFieldSchema))),
  extension: s.optional(s.array(s.lazy(() => extensionFieldSchema))),
});
