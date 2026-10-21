import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Customer company name to pass to the TravelHub API. */
export type CompanynameModel = string;

export const companynameModelSchema: Schema<CompanynameModel> = s.of<CompanynameModel>(s.union([s.string()]));
