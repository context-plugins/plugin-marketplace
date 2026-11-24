import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldCompact2Schema, type CustomFieldCompact2 } from "./custom-field-compact2.js";
import { enumOptionSchema, type EnumOption } from "./enum-option.js";
import { enumOption1Schema, type EnumOption1 } from "./enum-option1.js";
import { likeSchema, type Like } from "./like.js";
import { newDateValueSchema, type NewDateValue } from "./new-date-value.js";
import { oldDateValueSchema, type OldDateValue } from "./old-date-value.js";
import { previewSchema, type Preview } from "./preview.js";
import {
  projectCompact2AsanaStoriesApiSchema,
  type ProjectCompact2AsanaStoriesApi,
} from "./project-compact2-asana-stories-api.js";
import { sectionCompact1Schema, type SectionCompact1 } from "./section-compact1.js";
import { sourceSchema, type Source } from "./source.js";
import { stickerNameSchema, type StickerName } from "./sticker-name.js";
import { storyCompact2Schema, type StoryCompact2 } from "./story-compact2.js";
import { storyResponseDatesSchema, type StoryResponseDates } from "./story-response-dates.js";
import { tagCompact2Schema, type TagCompact2 } from "./tag-compact2.js";
import { taskCompactSchema, type TaskCompact } from "./task-compact.js";
import { taskCompact1Schema, type TaskCompact1 } from "./task-compact1.js";
import { typeAsanaStoriesApiSchema, type TypeAsanaStoriesApi } from "./type-asana-stories-api.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import {
  userCompact1AsanaStoriesApiSchema,
  type UserCompact1AsanaStoriesApi,
} from "./user-compact1-asana-stories-api.js";

export type StoryResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The time at which this resource was created. */
  createdAt?: Date;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning.
   */
  resourceSubtype?: string;
  /** The plain text of the comment to add. Cannot be used with html_text. */
  text?: string;
  /**
   * [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include
   * the name of the creator.
   */
  htmlText?: string;
  /** *Conditional*. Whether the story should be pinned on the resource. */
  isPinned?: boolean;
  /** The name of the sticker in this story. `null` if there is no sticker. */
  stickerName?: StickerName;
  createdBy?: UserCompact;
  type?: TypeAsanaStoriesApi;
  /** *Conditional*. Whether the text of the story can be edited after creation. */
  isEditable?: boolean;
  /** *Conditional*. Whether the text of the story has been edited after creation. */
  isEdited?: boolean;
  /**
   * *Deprecated - please use likes instead* *Conditional*. True if the story is hearted by the
   * authorized user, false if not.
   */
  hearted?: boolean;
  /**
   * *Deprecated - please use likes instead*
   *
   * *Conditional*. Array of likes for users who have hearted this story.
   */
  hearts?: Like[];
  /**
   * *Deprecated - please use likes instead*
   *
   * *Conditional*. The number of users who have hearted this story.
   */
  numHearts?: number;
  /** *Conditional*. True if the story is liked by the authorized user, false if not. */
  liked?: boolean;
  /** *Conditional*. Array of likes for users who have liked this story. */
  likes?: Like[];
  /** *Conditional*. The number of users who have liked this story. */
  numLikes?: number;
  /**
   * *Conditional*. A collection of previews to be displayed in the story.
   *
   * *Note: This property only exists for comment stories.*
   */
  previews?: Preview[];
  /** *Conditional*' */
  oldName?: string;
  /**
   * *Conditional*
   */
  newName?: string;
  /**
   * *Conditional*
   */
  oldDates?: StoryResponseDates;
  /**
   * *Conditional*
   */
  newDates?: StoryResponseDates;
  /**
   * *Conditional*
   */
  oldResourceSubtype?: string;
  /**
   * *Conditional*
   */
  newResourceSubtype?: string;
  /**
   * *Conditional*
   */
  story?: StoryCompact2;
  /**
   * *Conditional*
   */
  assignee?: UserCompact1AsanaStoriesApi;
  /**
   * *Conditional*
   */
  follower?: UserCompact1AsanaStoriesApi;
  /**
   * *Conditional*
   */
  oldSection?: SectionCompact1;
  /**
   * *Conditional*
   */
  newSection?: SectionCompact1;
  /**
   * *Conditional*
   */
  task?: TaskCompact1;
  /**
   * *Conditional*
   */
  project?: ProjectCompact2AsanaStoriesApi;
  /**
   * *Conditional*
   */
  tag?: TagCompact2;
  /**
   * *Conditional*
   */
  customField?: CustomFieldCompact2;
  /**
   * *Conditional*
   */
  oldTextValue?: string;
  /**
   * *Conditional*
   */
  newTextValue?: string;
  /**
   * *Conditional*
   */
  oldNumberValue?: number;
  /**
   * *Conditional*
   */
  newNumberValue?: number;
  /**
   * *Conditional*
   */
  oldEnumValue?: EnumOption1;
  /**
   * *Conditional*
   */
  newEnumValue?: EnumOption1;
  oldDateValue?: OldDateValue;
  newDateValue?: NewDateValue;
  /** *Conditional*. The old value of a people custom field story. */
  oldPeopleValue?: UserCompact[];
  /** *Conditional*. The new value of a people custom field story. */
  newPeopleValue?: UserCompact[];
  /** *Conditional*. The old value of a multi-enum custom field story. */
  oldMultiEnumValues?: EnumOption[];
  /** *Conditional*. The new value of a multi-enum custom field story. */
  newMultiEnumValues?: EnumOption[];
  /** *Conditional*. The new value of approval status. */
  newApprovalStatus?: string;
  /** *Conditional*. The old value of approval status. */
  oldApprovalStatus?: string;
  /**
   * *Conditional*
   */
  duplicateOf?: TaskCompact1;
  /**
   * *Conditional*
   */
  duplicatedFrom?: TaskCompact1;
  /**
   * *Conditional*
   */
  dependency?: TaskCompact1;
  /** The component of the Asana product the user used to trigger the story. */
  source?: Source;
  target?: TaskCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyResponseSchema: Schema<StoryResponse> = s.object<StoryResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    resourceSubtype: s.optional(s.string()),
    text: s.optional(s.string()),
    htmlText: s.optional(s.string()),
    isPinned: s.optional(s.boolean()),
    stickerName: s.optional(s.lazy(() => stickerNameSchema)),
    createdBy: s.optional(s.lazy(() => userCompactSchema)),
    type: s.optional(s.lazy(() => typeAsanaStoriesApiSchema)),
    isEditable: s.optional(s.boolean()),
    isEdited: s.optional(s.boolean()),
    hearted: s.optional(s.boolean()),
    hearts: s.optional(s.array(s.lazy(() => likeSchema))),
    numHearts: s.optional(s.int()),
    liked: s.optional(s.boolean()),
    likes: s.optional(s.array(s.lazy(() => likeSchema))),
    numLikes: s.optional(s.int()),
    previews: s.optional(s.array(s.lazy(() => previewSchema))),
    oldName: s.optional(s.string()),
    newName: s.optional(s.string()),
    oldDates: s.optional(s.lazy(() => storyResponseDatesSchema)),
    newDates: s.optional(s.lazy(() => storyResponseDatesSchema)),
    oldResourceSubtype: s.optional(s.string()),
    newResourceSubtype: s.optional(s.string()),
    story: s.optional(s.lazy(() => storyCompact2Schema)),
    assignee: s.optional(s.lazy(() => userCompact1AsanaStoriesApiSchema)),
    follower: s.optional(s.lazy(() => userCompact1AsanaStoriesApiSchema)),
    oldSection: s.optional(s.lazy(() => sectionCompact1Schema)),
    newSection: s.optional(s.lazy(() => sectionCompact1Schema)),
    task: s.optional(s.lazy(() => taskCompact1Schema)),
    project: s.optional(s.lazy(() => projectCompact2AsanaStoriesApiSchema)),
    tag: s.optional(s.lazy(() => tagCompact2Schema)),
    customField: s.optional(s.lazy(() => customFieldCompact2Schema)),
    oldTextValue: s.optional(s.string()),
    newTextValue: s.optional(s.string()),
    oldNumberValue: s.optional(s.int()),
    newNumberValue: s.optional(s.int()),
    oldEnumValue: s.optional(s.lazy(() => enumOption1Schema)),
    newEnumValue: s.optional(s.lazy(() => enumOption1Schema)),
    oldDateValue: s.optional(s.lazy(() => oldDateValueSchema)),
    newDateValue: s.optional(s.lazy(() => newDateValueSchema)),
    oldPeopleValue: s.optional(s.array(s.lazy(() => userCompactSchema))),
    newPeopleValue: s.optional(s.array(s.lazy(() => userCompactSchema))),
    oldMultiEnumValues: s.optional(s.array(s.lazy(() => enumOptionSchema))),
    newMultiEnumValues: s.optional(s.array(s.lazy(() => enumOptionSchema))),
    newApprovalStatus: s.optional(s.string()),
    oldApprovalStatus: s.optional(s.string()),
    duplicateOf: s.optional(s.lazy(() => taskCompact1Schema)),
    duplicatedFrom: s.optional(s.lazy(() => taskCompact1Schema)),
    dependency: s.optional(s.lazy(() => taskCompact1Schema)),
    source: s.optional(s.lazy(() => sourceSchema)),
    target: s.optional(s.lazy(() => taskCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
      createdAt: "created_at",
      resourceSubtype: "resource_subtype",
      htmlText: "html_text",
      isPinned: "is_pinned",
      stickerName: "sticker_name",
      createdBy: "created_by",
      isEditable: "is_editable",
      isEdited: "is_edited",
      numHearts: "num_hearts",
      numLikes: "num_likes",
      oldName: "old_name",
      newName: "new_name",
      oldDates: "old_dates",
      newDates: "new_dates",
      oldResourceSubtype: "old_resource_subtype",
      newResourceSubtype: "new_resource_subtype",
      oldSection: "old_section",
      newSection: "new_section",
      customField: "custom_field",
      oldTextValue: "old_text_value",
      newTextValue: "new_text_value",
      oldNumberValue: "old_number_value",
      newNumberValue: "new_number_value",
      oldEnumValue: "old_enum_value",
      newEnumValue: "new_enum_value",
      oldDateValue: "old_date_value",
      newDateValue: "new_date_value",
      oldPeopleValue: "old_people_value",
      newPeopleValue: "new_people_value",
      oldMultiEnumValues: "old_multi_enum_values",
      newMultiEnumValues: "new_multi_enum_values",
      newApprovalStatus: "new_approval_status",
      oldApprovalStatus: "old_approval_status",
      duplicateOf: "duplicate_of",
      duplicatedFrom: "duplicated_from",
    },
  },
  { additionalProperties: s.json() },
);
