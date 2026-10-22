import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extensionFieldSchema, type ExtensionField } from "./extension-field.js";
import { headerFieldSchema, type HeaderField } from "./header-field.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaCef1 = {
  /** The field to which the CEF formatted event will be output */
  outputField?: string;
  /** Set of header key/value pairs */
  header?: HeaderField[];
  /** Set of extension key-value pairs */
  extension?: ExtensionField[];
};

export const functionConfSchemaCef1Schema: Schema<FunctionConfSchemaCef1> = s.object<FunctionConfSchemaCef1>({
  outputField: s.optional(s.string()),
  header: s.optional(s.array(s.lazy(() => headerFieldSchema))),
  extension: s.optional(s.array(s.lazy(() => extensionFieldSchema))),
});
