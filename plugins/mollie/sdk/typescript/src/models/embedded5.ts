import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listSettlementCaptureResponseSchema,
  type ListSettlementCaptureResponse,
} from "./list-settlement-capture-response.js";

export type Embedded5 = {
  /** An array of capture objects. */
  captures: ListSettlementCaptureResponse[];
};

export const embedded5Schema: Schema<Embedded5> = s.object<Embedded5>({
  captures: s.array(s.lazy(() => listSettlementCaptureResponseSchema)),
});
