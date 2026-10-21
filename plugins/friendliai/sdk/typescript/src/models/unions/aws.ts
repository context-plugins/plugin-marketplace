import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** AWS fields to be uploaded with file. */
export type Aws = Record<string, unknown>;

export const awsSchema: Schema<Aws> = s.of<Aws>(s.union([s.record(s.string(), s.unknown())]));
