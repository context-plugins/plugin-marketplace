import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the metric group */
export const Kind2 = {
  Funnel: "funnel",
  Standard: "standard",
  Guardrail: "guardrail",
} as const;
export type Kind2 = (typeof Kind2)[keyof typeof Kind2] | (string & {});

export const kind2Schema: EnumSchema<Kind2> = s.enumOf<Kind2>(Kind2);
