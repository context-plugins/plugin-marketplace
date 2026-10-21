import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransfersRequest1 = {
  /** @default "cancelled" */
  status?: "cancelled";
};

export const transfersRequest1Schema: Schema<TransfersRequest1> = s.object<TransfersRequest1>({
  status: s.defaulted(s.literal("cancelled"), "cancelled"),
});
