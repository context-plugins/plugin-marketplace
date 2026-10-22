import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextAttributeNamesSchema, type ContextAttributeNames } from "./context-attribute-names.js";

export type ContextAttributeNamesCollection = {
  /** A collection of context attribute name data grouped by kind. */
  items: ContextAttributeNames[];
};

export const contextAttributeNamesCollectionSchema: Schema<ContextAttributeNamesCollection> =
  s.object<ContextAttributeNamesCollection>({
    items: s.array(s.lazy(() => contextAttributeNamesSchema)),
  });
