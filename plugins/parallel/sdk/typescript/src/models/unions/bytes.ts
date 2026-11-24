import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Bytes = number[];

export const bytesSchema: Schema<Bytes> = s.of<Bytes>(s.union([s.array(s.int())]));
