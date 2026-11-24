import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PackageId = number | string;

export const packageIdSchema: Schema<PackageId> = s.of<PackageId>(s.union([s.int(), s.string()]));
