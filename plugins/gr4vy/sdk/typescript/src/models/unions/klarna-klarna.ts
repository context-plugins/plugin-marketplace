import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { klarnaOptionsSchema, type KlarnaOptions } from "../klarna-options.js";

/** Custom options to be passed to the `klarna-klarna` connector. */
export type KlarnaKlarna = KlarnaOptions;

export const klarnaKlarnaSchema: Schema<KlarnaKlarna> = s.of<KlarnaKlarna>(
  s.union([s.lazy(() => klarnaOptionsSchema)]),
);
