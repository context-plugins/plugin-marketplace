import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EndedAt = Date;

export const endedAtSchema: Schema<EndedAt> = s.of<EndedAt>(s.union([s.dateTime()]));
