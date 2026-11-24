import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VersionNumber = number;

export const versionNumberSchema: Schema<VersionNumber> = s.of<VersionNumber>(s.union([s.int()]));
