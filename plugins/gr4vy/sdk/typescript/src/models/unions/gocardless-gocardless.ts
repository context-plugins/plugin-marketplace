import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { goCardlessOptionsSchema, type GoCardlessOptions } from "../go-cardless-options.js";

/** Custom options to be passed to the `gocardless-gocardless` connector. */
export type GocardlessGocardless = GoCardlessOptions;

export const gocardlessGocardlessSchema: Schema<GocardlessGocardless> = s.of<GocardlessGocardless>(
  s.union([s.lazy(() => goCardlessOptionsSchema)]),
);
