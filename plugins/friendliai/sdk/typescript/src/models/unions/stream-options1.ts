import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { streamOptionsSchema, type StreamOptions } from "../stream-options.js";

/** Options related to stream. It can only be used when `stream: true`. */
export type StreamOptions1 = StreamOptions;

export const streamOptions1Schema: Schema<StreamOptions1> = s.of<StreamOptions1>(
  s.union([s.lazy(() => streamOptionsSchema)]),
);
