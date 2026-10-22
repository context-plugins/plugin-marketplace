import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextAttributeNameSchema, type ContextAttributeName } from "./context-attribute-name.js";

export type ContextAttributeNames = {
  /** The kind associated with this collection of context attribute names. */
  kind: string;
  /** A collection of context attribute names. */
  names: ContextAttributeName[];
};

export const contextAttributeNamesSchema: Schema<ContextAttributeNames> = s.object<ContextAttributeNames>({
  kind: s.string(),
  names: s.array(s.lazy(() => contextAttributeNameSchema)),
});
