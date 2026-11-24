import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The model generating this request and consuming the results. Enables optimizations and tailors
 * default settings for the model's capabilities.
 */
export type ClientModel = string;

export const clientModelSchema: Schema<ClientModel> = s.of<ClientModel>(s.union([s.string()]));
