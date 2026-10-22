import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { travelhubOptionsSchema, type TravelhubOptions } from "../travelhub-options.js";

/** Custom options to be passed to the `travelhub-card` connector. */
export type TravelhubCard = TravelhubOptions;

export const travelhubCardSchema: Schema<TravelhubCard> = s.of<TravelhubCard>(
  s.union([s.lazy(() => travelhubOptionsSchema)]),
);
