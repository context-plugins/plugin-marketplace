import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type CloseStatusFilter = {
  /**
   * The close status that must match the close status of an execution for it to meet the criteria
   * of this filter.
   */
  status: Status1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const closeStatusFilterSchema: Schema<CloseStatusFilter> = s.object<CloseStatusFilter>(
  {
    status: status1Schema,
  },
  { additionalProperties: s.json() },
);
