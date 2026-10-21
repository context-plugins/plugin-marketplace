import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Versionid = string;

export const versionidSchema: Schema<Versionid> = s.of<Versionid>(s.union([s.string()]));
