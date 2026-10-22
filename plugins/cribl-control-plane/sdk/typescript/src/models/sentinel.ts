import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Sentinel = {
  /**
   * Hostname of sentinel node. Must be a JavaScript expression (which can evaluate to a constant
   * value), enclosed in quotes or backticks. Can be evaluated only at init time. Example
   * referencing a Global Variable: `myBucket-${C.vars.myVar}`.
   */
  host: string;
  /** Port of sentinel node */
  port: number;
};

export const sentinelSchema: Schema<Sentinel> = s.object<Sentinel>({
  host: s.string(),
  port: s.float64(),
});
