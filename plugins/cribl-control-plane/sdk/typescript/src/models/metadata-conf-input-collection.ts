import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetadataConfInputCollection = {
  /** Name of the metadata field. */
  name: string;
  /**
   * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate
   * to a constant.)
   */
  value: string;
};

export const metadataConfInputCollectionSchema: Schema<MetadataConfInputCollection> =
  s.object<MetadataConfInputCollection>({
    name: s.string(),
    value: s.string(),
  });
