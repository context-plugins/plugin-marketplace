import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The input for updating a Source */
export type SourceUpdate = {
  /** The source's name */
  name?: string;
  /**
   * The source's configuration. This specifies general metadata about sources, like connection
   * details Hightouch will use this configuration to connect to underlying source.
   *
   * The schema depends on the source type.
   *
   * Consumers should NOT make assumptions on the contents of the configuration. It may change as
   * Hightouch updates its internal code.
   */
  configuration?: Record<string, unknown>;
};

export const sourceUpdateSchema: Schema<SourceUpdate> = s.object<SourceUpdate>({
  name: s.optional(s.string()),
  configuration: s.optional(s.record(s.string(), s.unknown())),
});
