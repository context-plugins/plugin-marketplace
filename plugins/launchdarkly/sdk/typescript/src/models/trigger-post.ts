import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TriggerPost = {
  /** Optional comment describing the trigger */
  comment?: string;
  /**
   * The action to perform when triggering. This should be an array with a single object that looks
   * like <code>{"kind": "flag_action"}</code>. Supported flag actions are <code>turnFlagOn</code>
   * and <code>turnFlagOff</code>.
   */
  instructions?: Record<string, unknown>[];
  /**
   * The unique identifier of the integration for your trigger. Use <code>generic-trigger</code> for
   * integrations not explicitly supported.
   */
  integrationKey: string;
};

export const triggerPostSchema: Schema<TriggerPost> = s.object<TriggerPost>({
  comment: s.optional(s.string()),
  instructions: s.optional(s.array(s.record(s.string(), s.unknown()))),
  integrationKey: s.string(),
});
