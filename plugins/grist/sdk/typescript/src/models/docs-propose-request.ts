import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsProposeRequest = {
  /** Set to true to retract an existing proposal @default false */
  retracted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsProposeRequestSchema: Schema<DocsProposeRequest> = s.object<DocsProposeRequest>(
  {
    retracted: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
