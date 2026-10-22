import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { eventPropertiesSchema, type EventProperties } from "../event-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy5 = EventProperties;

export const orderBy5Schema: Schema<OrderBy5> = s.of<OrderBy5>(
  s.union([s.lazy(() => eventPropertiesSchema)]),
);
