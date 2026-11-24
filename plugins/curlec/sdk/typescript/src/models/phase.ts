import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Escalation stage of the dispute process. */
export const Phase = {
  Fraud: "fraud",
  Retrieval: "retrieval",
  Chargeback: "chargeback",
  PreArbitration: "pre_arbitration",
  Arbitration: "arbitration",
} as const;
export type Phase = (typeof Phase)[keyof typeof Phase] | (string & {});

export const phaseSchema: EnumSchema<Phase> = s.enumOf<Phase>(Phase);
