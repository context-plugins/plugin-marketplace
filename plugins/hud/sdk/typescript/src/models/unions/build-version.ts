import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BuildVersion = number;

export const buildVersionSchema: Schema<BuildVersion> = s.of<BuildVersion>(s.union([s.int()]));
