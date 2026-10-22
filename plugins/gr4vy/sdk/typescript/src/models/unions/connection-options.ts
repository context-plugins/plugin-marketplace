import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The connection options for the payment link. */
export type ConnectionOptions = Record<string, Record<string, unknown>>;

export const connectionOptionsSchema: Schema<ConnectionOptions> = s.of<ConnectionOptions>(
  s.union([s.record(s.string(), s.record(s.string(), s.unknown()))]),
);
