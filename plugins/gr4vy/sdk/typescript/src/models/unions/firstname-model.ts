import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** First name of the consumer. */
export type FirstnameModel = string;

export const firstnameModelSchema: Schema<FirstnameModel> = s.of<FirstnameModel>(s.union([s.string()]));
