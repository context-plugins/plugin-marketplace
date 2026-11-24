import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The input for creating a Source */
export type SourceCreate = {
  /** The source's name */
  name: string;
  /** The source's slug */
  slug: string;
  /** The source's type (e.g. snowflake or postgres). */
  type: string;
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
};

export const sourceCreateSchema: Schema<SourceCreate> = s.object<SourceCreate>({
  name: s.string(),
  slug: s.string(),
  type: s.string(),
  configuration: s.record(s.string(), s.unknown()),
});
