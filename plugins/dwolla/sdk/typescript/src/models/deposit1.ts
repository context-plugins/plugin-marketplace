import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ACH details for the first micro-deposit */
export type Deposit1 = {
  /**
   * A unique identifier for tracing the ACH transaction through the banking network. Used for
   * transaction tracking and reconciliation purposes
   */
  traceId: string;
};

export const deposit1Schema: Schema<Deposit1> = s.object<Deposit1>({
  traceId: s.string(),
});
