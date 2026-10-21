import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conf6Schema, type Conf6 } from "./conf6.js";

export type Pipeline = {
  /** Unique identifier for the Pipeline. */
  id: string;
  /** Configuration for the Pipeline, including functions and settings. */
  conf: Conf6;
};

export const pipelineSchema: Schema<Pipeline> = s.object<Pipeline>({
  id: s.string(),
  conf: conf6Schema,
});
