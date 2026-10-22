import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HeaderField = {
  /** Name of the CEF header field. Header names are predefined by the CEF standard. */
  name?: string;
  /** JavaScript expression to compute the value (can be constant) */
  value: string;
};

export const headerFieldSchema: Schema<HeaderField> = s.object<HeaderField>({
  name: s.optional(s.string()),
  value: s.string(),
});
