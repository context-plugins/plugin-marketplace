import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { promptPropertiesSchema, type PromptProperties } from "../prompt-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy33 = PromptProperties;

export const orderBy33Schema: Schema<OrderBy33> = s.of<OrderBy33>(
  s.union([s.lazy(() => promptPropertiesSchema)]),
);
