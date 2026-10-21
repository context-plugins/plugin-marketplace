import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectionConfInputCollection = {
  /** Pipeline or Pack to process data before sending to the Destination. */
  pipeline?: string;
  /** Destination to send data to when not using Routes. */
  output?: string;
};

export const connectionConfInputCollectionSchema: Schema<ConnectionConfInputCollection> =
  s.object<ConnectionConfInputCollection>({
    pipeline: s.optional(s.string()),
    output: s.optional(s.string()),
  });
