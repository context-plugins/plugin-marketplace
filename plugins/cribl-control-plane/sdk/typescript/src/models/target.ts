import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protocolSchema, type Protocol } from "./protocol.js";

export type Target = {
  /** Protocol to use when collecting metrics */
  protocol?: Protocol;
  /** Name of host from which to pull metrics. */
  host: string;
  /** The port number in the metrics URL for discovered targets. */
  port?: number;
  /** Path to use when collecting metrics from discovered targets */
  path?: string;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  protocol: s.optional(s.lazy(() => protocolSchema)),
  host: s.string(),
  port: s.optional(s.float64()),
  path: s.optional(s.string()),
});
