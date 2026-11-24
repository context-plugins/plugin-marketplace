import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Opaque build stamp of the data slice. Changes only when the data does. */
export type Version = string;

export const versionSchema: Schema<Version> = s.of<Version>(s.union([s.string()]));
