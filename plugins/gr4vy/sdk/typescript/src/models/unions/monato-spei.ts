import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { monatoSpeiOptionsSchema, type MonatoSpeiOptions } from "../monato-spei-options.js";

/** Custom options to be passed to the `monato-spei` connector. */
export type MonatoSpei = MonatoSpeiOptions;

export const monatoSpeiSchema: Schema<MonatoSpei> = s.of<MonatoSpei>(
  s.union([s.lazy(() => monatoSpeiOptionsSchema)]),
);
