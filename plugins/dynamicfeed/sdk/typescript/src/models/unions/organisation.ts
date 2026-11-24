import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Organisation = string;

export const organisationSchema: Schema<Organisation> = s.of<Organisation>(s.union([s.string()]));
