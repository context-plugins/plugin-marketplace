import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActivityEventParams = {
  /** The HTML content of the page body. */
  bodyContent?: string;
  /** The full datasource instance name inferred from the URL of the event */
  datasourceInstance?: string;
  /** The datasource without the instance inferred from the URL of the event */
  datasource?: string;
  /**
   * The instance only name of the datasource instance, e.g. 1 for jira_1, inferred from the URL of
   * the event
   */
  instanceOnlyName?: string;
  /**
   * Length in seconds of the activity. For VIEWS, this represents the amount the page was visible
   * in the foreground.
   */
  duration?: number;
  /** The user's search query associated with a SEARCH. */
  query?: string;
  /** The referring URL of the VIEW or SEARCH. */
  referrer?: string;
  /** The page title associated with the URL of the event */
  title?: string;
  /**
   * Indicates that the parameters are incomplete and more parameters may be sent with the same
   * action+timestamp+URL in the future. This is used for sending the duration when a `VIEW` is
   * finished.
   */
  truncated?: boolean;
};

export const activityEventParamsSchema: Schema<ActivityEventParams> = s.object<ActivityEventParams>({
  bodyContent: s.optional(s.string()),
  datasourceInstance: s.optional(s.string()),
  datasource: s.optional(s.string()),
  instanceOnlyName: s.optional(s.string()),
  duration: s.optional(s.int()),
  query: s.optional(s.string()),
  referrer: s.optional(s.string()),
  title: s.optional(s.string()),
  truncated: s.optional(s.boolean()),
});
