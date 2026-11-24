import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A 1Password vault id whose items become typed secrets for this run. The project's connected
 * 1Password integration is resolved server-side; no per-item ids are needed.
 */
export type Opvaultid = string;

export const opvaultidInternalSchema: Schema<Opvaultid> = s.of<Opvaultid>(s.union([s.string()]));

export const opvaultidSchema: Schema<Opvaultid> = s.lazySchema(() =>
  s.of<Opvaultid>(s.union([s.string().check(s.maxLength(64))])),
);
