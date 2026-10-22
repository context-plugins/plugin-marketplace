import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Retention = {
  /** Items stay at least this long before the cleanup may remove them */
  minAgeMs: number;
};

export const retentionSchema: Schema<Retention> = s.object<Retention>({
  minAgeMs: s.int(),
});
