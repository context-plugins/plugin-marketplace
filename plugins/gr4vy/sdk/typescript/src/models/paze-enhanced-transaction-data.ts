import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ecomDataSchema, type EcomData } from "./unions/ecom-data.js";
import { travelDataSchema, type TravelData } from "./unions/travel-data.js";

export type PazeEnhancedTransactionData = {
  /** Details pertaining to electronic commerce purchases. */
  ecomData?: EcomData;
  /** Details pertaining to travel bookings. */
  travelData?: TravelData;
};

export const pazeEnhancedTransactionDataSchema: Schema<PazeEnhancedTransactionData> =
  s.object<PazeEnhancedTransactionData>({
    ecomData: s.optional(s.lazy(() => ecomDataSchema)),
    travelData: s.optional(s.lazy(() => travelDataSchema)),
  });
