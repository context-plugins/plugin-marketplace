import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { channelSchema, type Channel } from "./channel.js";
import { eventSchema, type Event } from "./event.js";
import { manualFeedbackInfoSchema, type ManualFeedbackInfo } from "./manual-feedback-info.js";
import {
  manualFeedbackSideBySideInfoSchema,
  type ManualFeedbackSideBySideInfo,
} from "./manual-feedback-side-by-side-info.js";
import { seenFeedbackInfoSchema, type SeenFeedbackInfo } from "./seen-feedback-info.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";
import { userViewInfoSchema, type UserViewInfo } from "./user-view-info.js";
import { userSchema, type User } from "./user.js";
import { workflowFeedbackInfoSchema, type WorkflowFeedbackInfo } from "./workflow-feedback-info.js";

export type Feedback = {
  /**
   * Universally unique identifier of the event. To allow for reliable retransmission, only the
   * earliest received event of a given UUID is considered valid by the server and subsequent are
   * ignored.
   */
  id?: string;
  /**
   * The feature category to which the feedback applies. These should be broad product areas such as
   * Announcements, Answers, Search, etc. rather than specific components or UI treatments within
   * those areas.
   */
  category?: Category;
  /** A list of server-generated trackingTokens to which this event applies. */
  trackingTokens: string[];
  /**
   * The action the user took within a Glean client with respect to the object referred to by the
   * given `trackingToken`.
   */
  event: Event;
  /**
   * Position of the element in the case that the client controls order (such as feed and
   * autocomplete).
   */
  position?: number;
  /**
   * For type MANUAL_FEEDBACK, contains string of user feedback. For autocomplete, partial query
   * string. For feed, string of user feedback in addition to manual feedback signals extracted from
   * all suggested content.
   */
  payload?: string;
  sessionInfo?: SessionInfo;
  /** The ISO 8601 timestamp when the event occured. */
  timestamp?: Date;
  user?: User;
  /** The path the client was at when the feedback event triggered. */
  pathname?: string;
  /**
   * Where the feedback will be sent, e.g. to Glean, the user's company, or both. If no channels are
   * specified, feedback will go only to Glean.
   */
  channels?: Channel[];
  /** The URL the client was at when the feedback event triggered. */
  url?: string;
  /** The UI element tree associated with the event, if any. */
  uiTree?: string[];
  /** The UI element associated with the event, if any. */
  uiElement?: string;
  manualFeedbackInfo?: ManualFeedbackInfo;
  manualFeedbackSideBySideInfo?: ManualFeedbackSideBySideInfo;
  seenFeedbackInfo?: SeenFeedbackInfo;
  userViewInfo?: UserViewInfo;
  workflowFeedbackInfo?: WorkflowFeedbackInfo;
  /** The application ID of the client that sent the feedback event. */
  applicationId?: string;
  /** The agent ID of the client that sent the feedback event. */
  agentId?: string;
};

export const feedbackSchema: Schema<Feedback> = s.object<Feedback>({
  id: s.optional(s.string()),
  category: s.optional(s.lazy(() => categorySchema)),
  trackingTokens: s.array(s.string()),
  event: eventSchema,
  position: s.optional(s.int()),
  payload: s.optional(s.string()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  timestamp: s.optional(s.dateTime()),
  user: s.optional(s.lazy(() => userSchema)),
  pathname: s.optional(s.string()),
  channels: s.optional(s.array(s.lazy(() => channelSchema))),
  url: s.optional(s.string()),
  uiTree: s.optional(s.array(s.string())),
  uiElement: s.optional(s.string()),
  manualFeedbackInfo: s.optional(s.lazy(() => manualFeedbackInfoSchema)),
  manualFeedbackSideBySideInfo: s.optional(s.lazy(() => manualFeedbackSideBySideInfoSchema)),
  seenFeedbackInfo: s.optional(s.lazy(() => seenFeedbackInfoSchema)),
  userViewInfo: s.optional(s.lazy(() => userViewInfoSchema)),
  workflowFeedbackInfo: s.optional(s.lazy(() => workflowFeedbackInfoSchema)),
  applicationId: s.optional(s.string()),
  agentId: s.optional(s.string()),
});
