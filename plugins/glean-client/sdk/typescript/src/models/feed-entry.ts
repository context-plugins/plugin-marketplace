import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { announcementSchema, type Announcement } from "./announcement.js";
import { appResultSchema, type AppResult } from "./app-result.js";
import { calendarEventSchema, type CalendarEvent } from "./calendar-event.js";
import { chatSuggestionSchema, type ChatSuggestion } from "./chat-suggestion.js";
import { collectionItemSchema, type CollectionItem } from "./collection-item.js";
import { collectionSchema, type Collection } from "./collection.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";
import { digestSchema, type Digest } from "./digest.js";
import { documentSchema, type Document } from "./document.js";
import { justificationTypeSchema, type JustificationType } from "./justification-type.js";
import { personSchema, type Person } from "./person.js";
import { promptTemplateResultSchema, type PromptTemplateResult } from "./prompt-template-result.js";
import { thumbnailSchema, type Thumbnail } from "./thumbnail.js";
import { uiConfigSchema, type UiConfig } from "./ui-config.js";
import { userActivitySchema, type UserActivity } from "./user-activity.js";
import { workflowResultSchema, type WorkflowResult } from "./workflow-result.js";

export type FeedEntry = {
  /** optional ID associated with a single feed entry (displayable_list_id) */
  entryId?: string;
  /** Title for the result. Can be document title, event title and so on. */
  title: string;
  thumbnail?: Thumbnail;
  createdBy?: Person;
  uiConfig?: UiConfig;
  /** Type of the justification. */
  justificationType?: JustificationType;
  /** Server side generated justification string if server provides one. */
  justification?: string;
  /**
   * An opaque token that represents this particular feed entry in this particular response. To be
   * used for /feedback reporting.
   */
  trackingToken?: string;
  /** View URL for the entry if based on links that are not documents in Glean. */
  viewUrl?: string;
  document?: Document;
  event?: CalendarEvent;
  announcement?: Announcement;
  digest?: Digest;
  collection?: Collection;
  collectionItem?: CollectionItem;
  person?: Person;
  app?: AppResult;
  chatSuggestion?: ChatSuggestion;
  promptTemplate?: PromptTemplateResult;
  workflow?: WorkflowResult;
  /** List of activity where each activity has user, action, timestamp. */
  activities?: UserActivity[];
  documentVisitorCount?: CountInfo;
};

export const feedEntrySchema: Schema<FeedEntry> = s.object<FeedEntry>({
  entryId: s.optional(s.string()),
  title: s.string(),
  thumbnail: s.optional(s.lazy(() => thumbnailSchema)),
  createdBy: s.optional(s.lazy(() => personSchema)),
  uiConfig: s.optional(s.lazy(() => uiConfigSchema)),
  justificationType: s.optional(s.lazy(() => justificationTypeSchema)),
  justification: s.optional(s.string()),
  trackingToken: s.optional(s.string()),
  viewUrl: s.optional(s.string()),
  document: s.optional(s.lazy(() => documentSchema)),
  event: s.optional(s.lazy(() => calendarEventSchema)),
  announcement: s.optional(s.lazy(() => announcementSchema)),
  digest: s.optional(s.lazy(() => digestSchema)),
  collection: s.optional(s.lazy(() => collectionSchema)),
  collectionItem: s.optional(s.lazy(() => collectionItemSchema)),
  person: s.optional(s.lazy(() => personSchema)),
  app: s.optional(s.lazy(() => appResultSchema)),
  chatSuggestion: s.optional(s.lazy(() => chatSuggestionSchema)),
  promptTemplate: s.optional(s.lazy(() => promptTemplateResultSchema)),
  workflow: s.optional(s.lazy(() => workflowResultSchema)),
  activities: s.optional(s.array(s.lazy(() => userActivitySchema))),
  documentVisitorCount: s.optional(s.lazy(() => countInfoSchema)),
});
