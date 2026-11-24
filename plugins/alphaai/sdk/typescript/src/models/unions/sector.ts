import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Sector = string;

export const sectorSchema: Schema<Sector> = s.of<Sector>(s.union([s.string()]));
