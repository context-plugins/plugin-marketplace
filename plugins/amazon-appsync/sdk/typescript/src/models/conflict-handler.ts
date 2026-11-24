import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Conflict Resolution strategy to perform in the event of a conflict. OPTIMISTIC_CONCURRENCY:
 * Resolve conflicts by rejecting mutations when versions don't match the latest version at the
 * server. AUTOMERGE: Resolve conflicts with the Automerge conflict resolution strategy. LAMBDA:
 * Resolve conflicts with an Lambda function supplied in the LambdaConflictHandlerConfig.
 */
export const ConflictHandler = {
  OptimisticConcurrency: "OPTIMISTIC_CONCURRENCY",
  Lambda: "LAMBDA",
  Automerge: "AUTOMERGE",
  None: "NONE",
} as const;
export type ConflictHandler = (typeof ConflictHandler)[keyof typeof ConflictHandler] | (string & {});

export const conflictHandlerSchema: EnumSchema<ConflictHandler> = s.enumOf<ConflictHandler>(ConflictHandler);
