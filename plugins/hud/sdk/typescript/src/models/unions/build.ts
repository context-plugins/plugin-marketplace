import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Build = Record<string, unknown>;

export const buildSchema: Schema<Build> = s.of<Build>(s.union([s.record(s.string(), s.unknown())]));
