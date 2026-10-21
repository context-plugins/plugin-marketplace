import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliverySchema, type Delivery } from "./delivery.js";

export type Config = {
  /** The method by which the End User will consume the journey. */
  delivery: Delivery;
};

export const configSchema: Schema<Config> = s.object<Config>({
  delivery: deliverySchema,
});
