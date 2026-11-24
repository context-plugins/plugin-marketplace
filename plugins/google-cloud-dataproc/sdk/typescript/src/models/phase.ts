import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not
 * applicable when migrating away from it. The current phase of the migration execution.
 */
export const Phase = {
  PhaseUnspecified: "PHASE_UNSPECIFIED",
  Replication: "REPLICATION",
  Cutover: "CUTOVER",
} as const;
export type Phase = (typeof Phase)[keyof typeof Phase] | (string & {});

export const phaseSchema: EnumSchema<Phase> = s.enumOf<Phase>(Phase);
