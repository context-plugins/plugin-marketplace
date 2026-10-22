import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Where to place call information during a transfer. Supported values are `uri_parameters`,
 * `to_parameters`, `from_parameters`, or `sip_header:<header-name>`.
 */
export type CallInfoPlacement = string;

export const callInfoPlacementSchema: Schema<CallInfoPlacement> = s.of<CallInfoPlacement>(
  s.union([s.string()]),
);
