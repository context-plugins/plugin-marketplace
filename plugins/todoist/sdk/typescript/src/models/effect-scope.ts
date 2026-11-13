import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Mode, modeSchema } from "./mode.js";

export type EffectScope = {
  /** Where the effect applies. Always `all` for now. @default Mode.All */
  mode?: Mode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const effectScopeSchema: Schema<EffectScope> = s.object<EffectScope>(
  {
    mode: s.defaulted(modeSchema, Mode.All),
  },
  { additionalProperties: s.json() },
);
