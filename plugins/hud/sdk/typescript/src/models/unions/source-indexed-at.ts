import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SourceIndexedAt = Date;

export const sourceIndexedAtSchema: Schema<SourceIndexedAt> = s.of<SourceIndexedAt>(s.union([s.dateTime()]));
