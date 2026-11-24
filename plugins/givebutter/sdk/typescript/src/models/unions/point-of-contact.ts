import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pointOfContactResourceSchema, type PointOfContactResource } from "../point-of-contact-resource.js";

export type PointOfContact = PointOfContactResource;

export const pointOfContactSchema: Schema<PointOfContact> = s.of<PointOfContact>(
  s.union([s.lazy(() => pointOfContactResourceSchema)]),
);
