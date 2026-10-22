import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeLocationAddressSchema, type PazeLocationAddress } from "../paze-location-address.js";

/** Location from which the traveler departs. */
export type DepartureLocation = PazeLocationAddress;

export const departureLocationSchema: Schema<DepartureLocation> = s.of<DepartureLocation>(
  s.union([s.lazy(() => pazeLocationAddressSchema)]),
);
