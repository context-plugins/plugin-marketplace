import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Qes = {
  /** Effective quality when requesting QES with ZERTES legislation. */
  zertes?: string;
  /**
   * Effective quality when requesting QES with eIDAS legislation. Null if not available for this
   * user.
   */
  eidas?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qesSchema: Schema<Qes> = s.object<Qes>(
  {
    zertes: s.optional(s.string()),
    eidas: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
