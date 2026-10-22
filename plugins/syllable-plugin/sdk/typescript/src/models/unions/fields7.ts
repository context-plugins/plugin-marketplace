import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { incidentPropertiesSchema, type IncidentProperties } from "../incident-properties.js";

/** The fields to include in the response */
export type Fields7 = IncidentProperties[];

export const fields7Schema: Schema<Fields7> = s.of<Fields7>(
  s.union([s.array(s.lazy(() => incidentPropertiesSchema))]),
);
