import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MapRunRedrivenEventDetails = {
  /** The Amazon Resource Name (ARN) of a Map Run that was redriven. */
  mapRunArn?: string;
  /**
   * The number of times the Map Run has been redriven at this point in the execution's history
   * including this event. The redrive count for a redriven Map Run is always greater than 0.
   */
  redriveCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mapRunRedrivenEventDetailsSchema: Schema<MapRunRedrivenEventDetails> =
  s.object<MapRunRedrivenEventDetails>(
    {
      mapRunArn: s.optional(s.string()),
      redriveCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
