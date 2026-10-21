import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ACH details for the second micro-deposit */
export type Deposit2 = {
  /**
   * A unique identifier for tracing the ACH transaction through the banking network. Used for
   * transaction tracking and reconciliation purposes
   */
  traceId: string;
};

export const deposit2Schema: Schema<Deposit2> = s.object<Deposit2>({
  traceId: s.string(),
});
