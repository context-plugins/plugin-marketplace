import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The service receiving your data (e.g. Salesforce, Hubspot, Customer.io, or a SFTP server) */
export type Destination = {
  /** The destination's id */
  id: number;
  /** The destination's name */
  name: string;
  /** The destination's slug */
  slug: string;
  /** The id of the workspace that the destination belongs to */
  workspaceId: number;
  /** The timestamp when the destination was created */
  createdAt: Date;
  /** The timestamp when the destination was last updated */
  updatedAt: Date;
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
  /** A list of syncs that sync to this destination. */
  syncs: number[];
};

export const destinationSchema: Schema<Destination> = s.object<Destination>({
  id: s.float64(),
  name: s.string(),
  slug: s.string(),
  workspaceId: s.float64(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  type: s.string(),
  configuration: s.record(s.string(), s.unknown()),
  syncs: s.array(s.float64()),
});
