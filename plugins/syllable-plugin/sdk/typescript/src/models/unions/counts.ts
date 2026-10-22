import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Counts by channel_manager_status within this request_status; omitted if none */
export type Counts = Record<string, number>;

export const countsSchema: Schema<Counts> = s.of<Counts>(s.union([s.record(s.string(), s.int())]));
