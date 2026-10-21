import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The model to generate the embeddings. For dedicated endpoints, it returns the endpoint ID. */
export type Model25 = string;

export const model25Schema: Schema<Model25> = s.of<Model25>(s.union([s.string()]));
