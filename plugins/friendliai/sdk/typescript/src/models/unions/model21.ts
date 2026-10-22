import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Model ID used to generate the response. */
export type Model21 = string;

export const model21Schema: Schema<Model21> = s.of<Model21>(s.union([s.string()]));
