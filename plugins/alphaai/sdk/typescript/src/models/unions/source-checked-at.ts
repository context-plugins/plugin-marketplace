import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SourceCheckedAt = Date;

export const sourceCheckedAtSchema: Schema<SourceCheckedAt> = s.of<SourceCheckedAt>(s.union([s.dateTime()]));
