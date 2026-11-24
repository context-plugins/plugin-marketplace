import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { givingSpaceResourceSchema, type GivingSpaceResource } from "../giving-space-resource.js";

export type GivingSpace = GivingSpaceResource;

export const givingSpaceSchema: Schema<GivingSpace> = s.of<GivingSpace>(
  s.union([s.lazy(() => givingSpaceResourceSchema)]),
);
