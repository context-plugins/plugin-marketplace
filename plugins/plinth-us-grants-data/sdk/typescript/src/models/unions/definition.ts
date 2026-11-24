import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** What this class means, single-sourced from config/candid-compat.json. */
export type Definition = string;

export const definitionSchema: Schema<Definition> = s.of<Definition>(s.union([s.string()]));
