import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The database or warehouse where your data is stored. The starting point for a Hightouch data
 * pipeline.
 */
export type Source = {
  /** The source's id */
  id: number;
  /** The source's name */
  name: string;
  /** The source's slug */
  slug: string;
  /** The id of the workspace that the source belongs to */
  workspaceId: number;
  /** The timestamp when the source was created */
  createdAt: Date;
  /** The timestamp when the source was last updated */
  updatedAt: Date;
  /**
   * The source's configuration. This specifies general metadata about sources, like connection
   * details Hightouch will use this configuration to connect to underlying source.
   *
   * The schema depends on the source type.
   *
   * Consumers should NOT make assumptions on the contents of the configuration. It may change as
   * Hightouch updates its internal code.
   */
  configuration: Record<string, unknown>;
  /** The source's type (e.g. snowflake or postgres). */
  type: string;
};

export const sourceSchema: Schema<Source> = s.object<Source>({
  id: s.float64(),
  name: s.string(),
  slug: s.string(),
  workspaceId: s.float64(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  configuration: s.record(s.string(), s.unknown()),
  type: s.string(),
});
