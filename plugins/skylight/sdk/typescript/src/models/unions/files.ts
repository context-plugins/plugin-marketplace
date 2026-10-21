import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Files on the instance organized by type (downloads, uploads) */
export type Files = Record<string, unknown>;

export const filesSchema: Schema<Files> = s.of<Files>(s.union([s.record(s.string(), s.unknown())]));
