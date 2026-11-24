import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conflictDetectionSchema, type ConflictDetection } from "./conflict-detection.js";
import { conflictHandlerSchema, type ConflictHandler } from "./conflict-handler.js";
import {
  lambdaConflictHandlerConfigSchema,
  type LambdaConflictHandlerConfig,
} from "./lambda-conflict-handler-config.js";

export type SyncConfig = {
  /**
   * The Conflict Resolution strategy to perform in the event of a conflict. OPTIMISTIC_CONCURRENCY:
   * Resolve conflicts by rejecting mutations when versions don't match the latest version at the
   * server. AUTOMERGE: Resolve conflicts with the Automerge conflict resolution strategy. LAMBDA:
   * Resolve conflicts with an Lambda function supplied in the LambdaConflictHandlerConfig.
   */
  conflictHandler?: ConflictHandler;
  /**
   * The Conflict Detection strategy to use. VERSION: Detect conflicts based on object versions for
   * this resolver. NONE: Do not detect conflicts when invoking this resolver.
   */
  conflictDetection?: ConflictDetection;
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncConfigSchema: Schema<SyncConfig> = s.object<SyncConfig>(
  {
    conflictHandler: s.optional(s.lazy(() => conflictHandlerSchema)),
    conflictDetection: s.optional(s.lazy(() => conflictDetectionSchema)),
    lambdaConflictHandlerConfig: s.optional(s.lazy(() => lambdaConflictHandlerConfigSchema)),
  },
  { additionalProperties: s.json() },
);
