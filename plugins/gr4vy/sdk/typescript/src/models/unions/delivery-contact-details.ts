import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  pazeDeliveryContactDetailsSchema,
  type PazeDeliveryContactDetails,
} from "../paze-delivery-contact-details.js";

export type DeliveryContactDetails = PazeDeliveryContactDetails;

export const deliveryContactDetailsSchema: Schema<DeliveryContactDetails> = s.of<DeliveryContactDetails>(
  s.union([s.lazy(() => pazeDeliveryContactDetailsSchema)]),
);
