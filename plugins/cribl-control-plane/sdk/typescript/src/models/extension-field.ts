import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtensionField = {
  /** Name of the CEF extension field. Must contain only alphanumeric characters. */
  name: string;
  /** JavaScript expression to compute the value (can be constant) */
  value: string;
};

export const extensionFieldSchema: Schema<ExtensionField> = s.object<ExtensionField>({
  name: s.string(),
  value: s.string(),
});
