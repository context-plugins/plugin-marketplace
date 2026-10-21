import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The version of 3DS which will be simulated. */
export type Version = string;

export const versionSchema: Schema<Version> = s.of<Version>(s.union([s.string()]));
