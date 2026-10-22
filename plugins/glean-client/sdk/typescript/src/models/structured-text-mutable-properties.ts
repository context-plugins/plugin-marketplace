import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StructuredTextMutableProperties = {
  text: string;
};

export const structuredTextMutablePropertiesSchema: Schema<StructuredTextMutableProperties> =
  s.object<StructuredTextMutableProperties>({
    text: s.string(),
  });
