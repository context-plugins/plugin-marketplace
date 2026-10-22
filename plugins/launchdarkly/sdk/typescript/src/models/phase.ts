import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audienceSchema, type Audience } from "./audience.js";

export type Phase = {
  /** The phase ID */
  id: string;
  audiences: Audience[];
  /** The release phase name */
  name: string;
  configuration?: Record<string, unknown>;
};

export const phaseSchema: Schema<Phase> = s.object<Phase>({
  id: s.string(),
  audiences: s.array(s.lazy(() => audienceSchema)),
  name: s.string(),
  configuration: s.optional(s.record(s.string(), s.unknown())),
});
