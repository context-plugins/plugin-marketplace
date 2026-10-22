import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { incidentPropertiesSchema, type IncidentProperties } from "../incident-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy7 = IncidentProperties;

export const orderBy7Schema: Schema<OrderBy7> = s.of<OrderBy7>(
  s.union([s.lazy(() => incidentPropertiesSchema)]),
);
