import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Details = Record<string, unknown>;

export const detailsSchema: Schema<Details> = s.of<Details>(s.union([s.record(s.string(), s.unknown())]));
