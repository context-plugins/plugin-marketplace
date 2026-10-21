import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextAttributeValuesSchema, type ContextAttributeValues } from "./context-attribute-values.js";

export type ContextAttributeValuesCollection = {
  /** A collection of context attribute value data grouped by kind. */
  items: ContextAttributeValues[];
};

export const contextAttributeValuesCollectionSchema: Schema<ContextAttributeValuesCollection> =
  s.object<ContextAttributeValuesCollection>({
    items: s.array(s.lazy(() => contextAttributeValuesSchema)),
  });
