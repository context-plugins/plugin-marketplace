import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sideBySideImplementationSchema,
  type SideBySideImplementation,
} from "./side-by-side-implementation.js";
import { source1Schema, type Source1 } from "./source1.js";
import { vote1Schema, type Vote1 } from "./vote1.js";

export type ManualFeedbackSideBySideInfo = {
  /** The email address of the user who submitted the side-by-side feedback. */
  email?: string;
  /** The source associated with the side-by-side feedback event. */
  source?: Source1;
  /** The query or prompt that was evaluated across multiple implementations. */
  query?: string;
  /** Array of implementations that were compared side-by-side. */
  implementations?: SideBySideImplementation[];
  /** Unique identifier for this evaluation session to group related feedback events. */
  evaluationSessionId?: string;
  /** The ID of the implementation this specific feedback event is for. */
  implementationId?: string;
  /** The vote for this specific implementation. */
  vote?: Vote1;
  /** Specific feedback comments for this implementation. */
  comments?: string;
};

export const manualFeedbackSideBySideInfoSchema: Schema<ManualFeedbackSideBySideInfo> =
  s.object<ManualFeedbackSideBySideInfo>({
    email: s.optional(s.string()),
    source: s.optional(s.lazy(() => source1Schema)),
    query: s.optional(s.string()),
    implementations: s.optional(s.array(s.lazy(() => sideBySideImplementationSchema))),
    evaluationSessionId: s.optional(s.string()),
    implementationId: s.optional(s.string()),
    vote: s.optional(s.lazy(() => vote1Schema)),
    comments: s.optional(s.string()),
  });
