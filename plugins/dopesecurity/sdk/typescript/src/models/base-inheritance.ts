import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Signals that settings are inherited from the base policy */
export type BaseInheritance = {
  /** Always `true`. Signals that settings are inherited from the base policy. @default "True" */
  inheritsFromBase?: "True";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseInheritanceSchema: Schema<BaseInheritance> = s.object<BaseInheritance>(
  {
    inheritsFromBase: s.defaulted(s.literal("True"), "True"),
  },
  { additionalProperties: s.json() },
);
