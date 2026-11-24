import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ArchivedAt = Date;

export const archivedAtSchema: Schema<ArchivedAt> = s.of<ArchivedAt>(s.union([s.dateTime()]));
