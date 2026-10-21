import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the model is offered as a free endpoint. */
export type IsFree = boolean;

export const isFreeSchema: Schema<IsFree> = s.of<IsFree>(s.union([s.boolean()]));
