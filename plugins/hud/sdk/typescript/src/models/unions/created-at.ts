import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CreatedAt = Date;

export const createdAtSchema: Schema<CreatedAt> = s.of<CreatedAt>(s.union([s.dateTime()]));
