import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextAttributeValueSchema, type ContextAttributeValue } from "./context-attribute-value.js";

export type ContextAttributeValues = {
  /** The kind associated with this collection of context attribute values. */
  kind: string;
  /** A collection of context attribute values. */
  values: ContextAttributeValue[];
};

export const contextAttributeValuesSchema: Schema<ContextAttributeValues> = s.object<ContextAttributeValues>({
  kind: s.string(),
  values: s.array(s.lazy(() => contextAttributeValueSchema)),
});
