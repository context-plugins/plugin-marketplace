import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Returns = Record<string, unknown>;

export const returnsSchema: Schema<Returns> = s.of<Returns>(s.union([s.record(s.string(), s.unknown())]));
