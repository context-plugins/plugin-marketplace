import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Default = Record<string, unknown>;

export const defaultSchema: Schema<Default> = s.of<Default>(s.union([s.record(s.string(), s.unknown())]));
