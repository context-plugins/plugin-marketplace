import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { servicePropertiesSchema, type ServiceProperties } from "../service-properties.js";

/** The fields to include in the response */
export type Fields17 = ServiceProperties[];

export const fields17Schema: Schema<Fields17> = s.of<Fields17>(
  s.union([s.array(s.lazy(() => servicePropertiesSchema))]),
);
