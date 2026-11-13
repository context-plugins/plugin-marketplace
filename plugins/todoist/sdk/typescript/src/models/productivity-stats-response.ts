import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dailyCompletionItemSchema, type DailyCompletionItem } from "./daily-completion-item.js";
import { goalsSettingsSchema, type GoalsSettings } from "./goals-settings.js";
import { graphPointSchema, type GraphPoint } from "./graph-point.js";
import { karmaUpdateReasonEntrySchema, type KarmaUpdateReasonEntry } from "./karma-update-reason-entry.js";
import { weeklyCompletionItemSchema, type WeeklyCompletionItem } from "./weekly-completion-item.js";

/**
 * Comprehensive productivity statistics response.
 *
 * Includes completion counts, karma information, goals, and streaks.
 */
export type ProductivityStatsResponse = {
  /** Daily completion statistics for the last 7 days, ordered chronologically */
  daysItems: DailyCompletionItem[];
  /**
   * Weekly completion statistics for the last 4 weeks, ordered chronologically. Only available for
   * Pro and Business plan users
   */
  weekItems: WeeklyCompletionItem[];
  /**
   * Mapping of project IDs to their color names (e.g., {'2aB3cD4eF5gH6iJ7': 'blue',
   * '8kL9mN0oP1qR2sT3': 'red'})
   */
  projectColors: Record<string, string>;
  /** Total number of tasks completed by the user (all time) */
  completedCount: number;
  /** Current karma score */
  karma: number;
  /** Karma trend indicator ('up' or 'down') */
  karmaTrend: string;
  /** Historical karma data points for graphing, each containing date and karma_avg */
  karmaGraphData: GraphPoint[];
  /** Net karma change from the most recent update (positive_karma + negative_karma) */
  karmaLastUpdate: number;
  /** Recent karma update events with reasons and amounts */
  karmaUpdateReasons: KarmaUpdateReasonEntry[];
  /** User goals, streaks, and productivity settings */
  goals: GoalsSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productivityStatsResponseSchema: Schema<ProductivityStatsResponse> =
  s.object<ProductivityStatsResponse>(
    {
      daysItems: s.array(s.lazy(() => dailyCompletionItemSchema)),
      weekItems: s.array(s.lazy(() => weeklyCompletionItemSchema)),
      projectColors: s.record(s.string(), s.string()),
      completedCount: s.int(),
      karma: s.float64(),
      karmaTrend: s.string(),
      karmaGraphData: s.array(s.lazy(() => graphPointSchema)),
      karmaLastUpdate: s.float64(),
      karmaUpdateReasons: s.array(s.lazy(() => karmaUpdateReasonEntrySchema)),
      goals: goalsSettingsSchema,
      _keysMap: {
        daysItems: "days_items",
        weekItems: "week_items",
        projectColors: "project_colors",
        completedCount: "completed_count",
        karmaTrend: "karma_trend",
        karmaGraphData: "karma_graph_data",
        karmaLastUpdate: "karma_last_update",
        karmaUpdateReasons: "karma_update_reasons",
      },
    },
    { additionalProperties: s.json() },
  );
