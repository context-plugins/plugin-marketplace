import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Oracle SCN to start replicating from. */
export type OracleScnPosition2 = {
  /** Required. SCN number from where Logs will be read */
  scn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleScnPosition2Schema: Schema<OracleScnPosition2> = s.object<OracleScnPosition2>(
  {
    scn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
