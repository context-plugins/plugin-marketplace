import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action the user took within a Glean client with respect to the object referred to by the
 * given `trackingToken`.
 */
export const Event = {
  Click: "CLICK",
  ContainerClick: "CONTAINER_CLICK",
  CopyLink: "COPY_LINK",
  Create: "CREATE",
  Dismiss: "DISMISS",
  Downvote: "DOWNVOTE",
  Email: "EMAIL",
  Execute: "EXECUTE",
  Filter: "FILTER",
  FirstToken: "FIRST_TOKEN",
  FocusIn: "FOCUS_IN",
  LastToken: "LAST_TOKEN",
  ManualFeedback: "MANUAL_FEEDBACK",
  ManualFeedbackSideBySide: "MANUAL_FEEDBACK_SIDE_BY_SIDE",
  FeedbackTimeSaved: "FEEDBACK_TIME_SAVED",
  MarkAsRead: "MARK_AS_READ",
  Message: "MESSAGE",
  MiddleClick: "MIDDLE_CLICK",
  PageBlur: "PAGE_BLUR",
  PageFocus: "PAGE_FOCUS",
  PageLeave: "PAGE_LEAVE",
  Preview: "PREVIEW",
  RelatedClick: "RELATED_CLICK",
  RightClick: "RIGHT_CLICK",
  SectionClick: "SECTION_CLICK",
  Seen: "SEEN",
  Select: "SELECT",
  Share: "SHARE",
  ShowMore: "SHOW_MORE",
  Upvote: "UPVOTE",
  View: "VIEW",
  Visible: "VISIBLE",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
