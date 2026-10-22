import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { forkedFromSchema, type ForkedFrom } from "./forked-from.js";
import { meta5Schema, type Meta5 } from "./meta5.js";

export type ForkConversationResponse = {
  /** New conversation identifier */
  id: string;
  /** Title of the forked conversation */
  title: string;
  /**
   * Project the fork is linked to. Present only when the source conversation belonged to a project
   * that the caller can still view; otherwise omitted.
   */
  projectId?: string;
  forkedFrom: ForkedFrom;
  /** Number of messages copied into the new conversation */
  messageCount: number;
  meta: Meta5;
};

export const forkConversationResponseSchema: Schema<ForkConversationResponse> =
  s.object<ForkConversationResponse>({
    id: s.string(),
    title: s.string(),
    projectId: s.optional(s.string()),
    forkedFrom: forkedFromSchema,
    messageCount: s.int(),
    meta: meta5Schema,
  });
