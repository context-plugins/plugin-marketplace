import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetadataItem = {
  /** Name of the metadata field. */
  name: string;
  /**
   * JavaScript expression to compute the metadata field's value, enclosed in quotes or backticks.
   * Can evaluate to a constant.
   */
  value: string;
};

export const metadataItemSchema: Schema<MetadataItem> = s.object<MetadataItem>({
  name: s.string(),
  value: s.string(),
});
