import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conf3Schema, type Conf3 } from "./conf3.js";

/** Rest collector configuration */
export type CollectorRest = {
  /** Collector type @default "rest" */
  type?: "rest";
  /** Collector configuration */
  conf: Conf3;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorRestSchema: Schema<CollectorRest> = s.object<CollectorRest>({
  type: s.defaulted(s.literal("rest"), "rest"),
  conf: conf3Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});
