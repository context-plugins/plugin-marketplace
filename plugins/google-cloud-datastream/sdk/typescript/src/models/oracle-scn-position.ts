import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Oracle SCN position */
export type OracleScnPosition = {
  /** Required. SCN number from where Logs will be read */
  scn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleScnPositionSchema: Schema<OracleScnPosition> = s.object<OracleScnPosition>(
  {
    scn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
