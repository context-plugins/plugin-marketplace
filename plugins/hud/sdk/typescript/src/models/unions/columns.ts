import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Columns = Record<string, unknown>;

export const columnsSchema: Schema<Columns> = s.of<Columns>(s.union([s.record(s.string(), s.unknown())]));
