import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The input for creating a Destination */
export type DestinationCreate = {
  /** The destination's name */
  name: string;
  /** The destination's slug */
  slug: string;
  /** The destination's type (e.g. salesforce or hubspot). */
  type: string;
  /**
   * The destination's configuration. This specifies general metadata about destination, like
   * hostname and username. Hightouch will be using this configuration to connect to destination.
   *
   * The schema depends on the destination type.
   *
   * Consumers should NOT make assumptions on the contents of the configuration. It may change as
   * Hightouch updates its internal code.
   */
  configuration: Record<string, unknown>;
};

export const destinationCreateSchema: Schema<DestinationCreate> = s.object<DestinationCreate>({
  name: s.string(),
  slug: s.string(),
  type: s.string(),
  configuration: s.record(s.string(), s.unknown()),
});
