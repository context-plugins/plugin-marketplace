import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cybersourceOptionsSchema, type CybersourceOptions } from "../cybersource-options.js";

/** Custom options to be passed to the `cybersource-kcp` connector. */
export type CybersourceKcp = CybersourceOptions;

export const cybersourceKcpSchema: Schema<CybersourceKcp> = s.of<CybersourceKcp>(
  s.union([s.lazy(() => cybersourceOptionsSchema)]),
);
