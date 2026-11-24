import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Version = number;

export const versionSchema: Schema<Version> = s.of<Version>(s.union([s.int()]));
