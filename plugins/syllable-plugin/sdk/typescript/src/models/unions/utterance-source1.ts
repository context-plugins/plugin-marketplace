import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { utteranceSourceSchema, type UtteranceSource } from "../utterance-source.js";

export type UtteranceSource1 = UtteranceSource;

export const utteranceSource1Schema: Schema<UtteranceSource1> = s.of<UtteranceSource1>(
  s.union([s.lazy(() => utteranceSourceSchema)]),
);
