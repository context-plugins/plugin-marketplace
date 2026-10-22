import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  iscardholdertravelingModelSchema,
  type IscardholdertravelingModel,
} from "./unions/iscardholdertraveling-model.js";
import { seatclassModelSchema, type SeatclassModel } from "./unions/seatclass-model.js";

export type NuveiAirlineDataOptions = {
  /** The seat class of the booking */
  seatClass?: SeatclassModel;
  /** Indicates whether the cardholder is also a passenger. */
  isCardholderTraveling?: IscardholdertravelingModel;
};

export const nuveiAirlineDataOptionsSchema: Schema<NuveiAirlineDataOptions> =
  s.object<NuveiAirlineDataOptions>({
    seatClass: s.optional(s.lazy(() => seatclassModelSchema)),
    isCardholderTraveling: s.optional(s.lazy(() => iscardholdertravelingModelSchema)),
  });
