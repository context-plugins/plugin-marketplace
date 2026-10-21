import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The customer ID for the Everyday Rewards account. */
export type CustomeridModel = string;

export const customeridModelSchema: Schema<CustomeridModel> = s.of<CustomeridModel>(s.union([s.string()]));
