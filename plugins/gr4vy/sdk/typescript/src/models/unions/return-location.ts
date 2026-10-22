import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeLocationAddressSchema, type PazeLocationAddress } from "../paze-location-address.js";

/** Location to which the traveler returns. */
export type ReturnLocation = PazeLocationAddress;

export const returnLocationSchema: Schema<ReturnLocation> = s.of<ReturnLocation>(
  s.union([s.lazy(() => pazeLocationAddressSchema)]),
);
