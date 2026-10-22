import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ValuePut = {
  /** The variation value to set for the context. Must match the flag's variation type. */
  setting?: Record<string, unknown>;
  /** Optional comment describing the change */
  comment?: string;
};

export const valuePutSchema: Schema<ValuePut> = s.object<ValuePut>({
  setting: s.optional(s.record(s.string(), s.unknown())),
  comment: s.optional(s.string()),
});
