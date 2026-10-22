import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { eventPropertiesSchema, type EventProperties } from "../event-properties.js";

/** The fields to include in the response */
export type Fields5 = EventProperties[];

export const fields5Schema: Schema<Fields5> = s.of<Fields5>(
  s.union([s.array(s.lazy(() => eventPropertiesSchema))]),
);
