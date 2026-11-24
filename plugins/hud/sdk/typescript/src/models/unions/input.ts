import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Input = Record<string, unknown>;

export const inputSchema: Schema<Input> = s.of<Input>(s.union([s.record(s.string(), s.unknown())]));
