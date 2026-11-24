import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Model the run used, as the source reported it. A HUD model id or `model_name` also links the
 * trace to that model.
 */
export type Model1 = string;

export const model1InternalSchema: Schema<Model1> = s.of<Model1>(s.union([s.string()]));

export const model1Schema: Schema<Model1> = s.lazySchema(() =>
  s.of<Model1>(s.union([s.string().check(s.maxLength(255))])),
);
