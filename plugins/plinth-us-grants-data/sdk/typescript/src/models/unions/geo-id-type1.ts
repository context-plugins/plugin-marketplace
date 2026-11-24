import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { geoIdTypeSchema, type GeoIdType } from "../geo-id-type.js";

export type GeoIdType1 = GeoIdType;

export const geoIdType1Schema: Schema<GeoIdType1> = s.of<GeoIdType1>(
  s.union([s.lazy(() => geoIdTypeSchema)]),
);
