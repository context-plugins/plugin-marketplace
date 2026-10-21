import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SimplePivotConfiguration = {
  /** Fields to be used for the left-most column. */
  labelField?: string;
  /** Fields with the cell values (i.e. aggregates) */
  dataFields?: string[];
  /** Fields to qualify or group data fields */
  qualifierFields?: string[];
};

export const simplePivotConfigurationSchema: Schema<SimplePivotConfiguration> =
  s.object<SimplePivotConfiguration>({
    labelField: s.optional(s.string()),
    dataFields: s.optional(s.array(s.string())),
    qualifierFields: s.optional(s.array(s.string())),
  });
