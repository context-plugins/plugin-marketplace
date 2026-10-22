import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customMessagePropertiesSchema, type CustomMessageProperties } from "../custom-message-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy32 = CustomMessageProperties;

export const orderBy32Schema: Schema<OrderBy32> = s.of<OrderBy32>(
  s.union([s.lazy(() => customMessagePropertiesSchema)]),
);
