import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The input for updating a Destination */
export type DestinationUpdate = {
  /** The destination's name */
  name?: string;
  /**
   * The destination's configuration. This specifies general metadata about destination, like
   * hostname and username. Hightouch will be using this configuration to connect to destination.
   *
   * The schema depends on the destination type.
   *
   * Consumers should NOT make assumptions on the contents of the configuration. It may change as
   * Hightouch updates its internal code.
   */
  configuration?: Record<string, unknown>;
};

export const destinationUpdateSchema: Schema<DestinationUpdate> = s.object<DestinationUpdate>({
  name: s.optional(s.string()),
  configuration: s.optional(s.record(s.string(), s.unknown())),
});
