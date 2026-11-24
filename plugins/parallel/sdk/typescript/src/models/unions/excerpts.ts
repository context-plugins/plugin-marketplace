import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Excerpts from the citation supporting the output. Only certain processors provide excerpts. */
export type Excerpts = string[];

export const excerptsSchema: Schema<Excerpts> = s.of<Excerpts>(s.union([s.array(s.string())]));
