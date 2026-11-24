import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Variables returned in the response. */
export type ResponseOptionsVariables = {
  /** Indicates whether to include variables in the response. */
  include: boolean;
  /** Filter the returned variables. If missing, null, or empty, no filtering is applied. */
  filter?: string[] | null;
  /** Indicates whether the response contains only changed variables. */
  onlyChanged: boolean;
};

export const responseOptionsVariablesSchema: Schema<ResponseOptionsVariables> =
  s.object<ResponseOptionsVariables>({
    include: s.boolean(),
    filter: s.optionalNullable(s.array(s.string())),
    onlyChanged: s.boolean(),
  });
