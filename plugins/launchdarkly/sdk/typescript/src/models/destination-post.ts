import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind6Schema, type Kind6 } from "./kind6.js";

export type DestinationPost = {
  /** A human-readable name for your Data Export destination */
  name?: string;
  /** The type of Data Export destination */
  kind?: Kind6;
  /** An object with the configuration parameters required for the destination type */
  config?: Record<string, unknown>;
  /** Whether the export is on. Displayed as the integration status in the LaunchDarkly UI. */
  on?: boolean;
};

export const destinationPostSchema: Schema<DestinationPost> = s.object<DestinationPost>({
  name: s.optional(s.string()),
  kind: s.optional(s.lazy(() => kind6Schema)),
  config: s.optional(s.record(s.string(), s.unknown())),
  on: s.optional(s.boolean()),
});
