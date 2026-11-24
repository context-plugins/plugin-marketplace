import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** exact version, e.g. 4.17.10, exact version (optional; defaults to latest) */
export type Version = string;

export const versionSchema: Schema<Version> = s.of<Version>(s.union([s.string()]));
