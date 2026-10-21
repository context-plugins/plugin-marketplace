import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { targetContext2Schema, type TargetContext2 } from "./target-context2.js";

export type RouteConf = {
  /**
   * If <code>true</code>, detect each matched event's datatype and extract fields from
   * <code>_raw</code> before the Pipeline processes the event, so Functions and Filters can
   * reference the extracted fields. Otherwise, <code>false</code> (the default).
   */
  autoParse?: boolean;
  /**
   * Array of clone configurations, each with a key-value pair to set or overwrite in cloned events.
   * Original events continue to the next Route.
   */
  clones?: string[];
  /**
   * Context for the Route: <code>group</code> (Worker Group or Edge Fleet) or <code>pack</code>.
   */
  context?: string;
  /** Brief description of the Route. */
  description?: string;
  /** If <code>true</code>, disable the Route. Otherwise, <code>false</code>. */
  disabled?: boolean;
  /**
   * If <code>true</code>, use the <code>outputExpression</code> for dynamic Destination selection.
   * Otherwise, <code>false</code>.
   */
  enableOutputExpression?: boolean;
  /** JavaScript expression to select events for routing. */
  filter?: string;
  /**
   * If <code>true</code> the Route processes matched events and sends them to the specified
   * Pipeline. Matched events do not continue to the next Route, but non-matched events do continue
   * to the next Route. If <code>false</code>, the Route processes matched events and sends them to
   * the specified Pipeline, and all events (matched and non-matched) continue to the next Route.
   * Must be <code>false</code> to clone events.
   */
  final: boolean;
  /** Unique identifier for the Route Group that the Route is associated with. */
  groupId?: string;
  /** Unique identifier for the Route. */
  id: string;
  /** Name of the Route. */
  name: string;
  /**
   * Destination that the Route sends matching events to after the Pipeline processes the events.
   */
  output?: string;
  /**
   * JavaScript expression to evaluate for dynamic Destination selection. Evaluation occurs when the
   * Route is constructed, not for each event.
   */
  outputExpression?: string;
  /** Pipeline that the Route sends matching events to. */
  pipeline: string;
  /**
   * Target context for subsequent event processing after applying the Route: <code>group</code>
   * (Worker Group or Edge Fleet) or <code>pack</code>.
   */
  targetContext?: TargetContext2;
};

export const routeConfSchema: Schema<RouteConf> = s.object<RouteConf>({
  autoParse: s.optional(s.boolean()),
  clones: s.optional(s.array(s.string())),
  context: s.optional(s.string()),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  enableOutputExpression: s.optional(s.boolean()),
  filter: s.optional(s.string()),
  final: s.boolean(),
  groupId: s.optional(s.string()),
  id: s.string(),
  name: s.string(),
  output: s.optional(s.string()),
  outputExpression: s.optional(s.string()),
  pipeline: s.string(),
  targetContext: s.optional(s.lazy(() => targetContext2Schema)),
});
