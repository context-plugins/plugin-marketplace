import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nuveiKlarnaOptionsSchema, type NuveiKlarnaOptions } from "../nuvei-klarna-options.js";

/** Custom options to be passed to the `nuvei-klarna` connector. */
export type NuveiKlarna = NuveiKlarnaOptions;

export const nuveiKlarnaSchema: Schema<NuveiKlarna> = s.of<NuveiKlarna>(
  s.union([s.lazy(() => nuveiKlarnaOptionsSchema)]),
);
