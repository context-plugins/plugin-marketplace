import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

/** One step of a funnel definition. `kind` selects which other fields apply. */
export type FunnelStep = {
  kind: Kind;
  /** URL path — for kind page/entry_page/exit_page. */
  path?: string;
  /** Path match operator (e|b|c|r) — for kind page. */
  operator?: string;
  /** Custom event name — for kind event. */
  event?: string;
  /** Optional custom-property key — for kind event. */
  propKey?: string;
  /** Optional custom-property value — for kind event. */
  propValue?: string;
  /** Goal id — for kind goal. */
  goalId?: number;
  /** Scroll depth 0..100 — for kind scroll. */
  threshold?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const funnelStepSchema: Schema<FunnelStep> = s.object<FunnelStep>(
  {
    kind: kindSchema,
    path: s.optional(s.string()),
    operator: s.optional(s.string()),
    event: s.optional(s.string()),
    propKey: s.optional(s.string()),
    propValue: s.optional(s.string()),
    goalId: s.optional(s.int()),
    threshold: s.optional(s.int()),
    _keysMap: {
      propKey: "prop_key",
      propValue: "prop_value",
      goalId: "goal_id",
    },
  },
  { additionalProperties: s.json() },
);
