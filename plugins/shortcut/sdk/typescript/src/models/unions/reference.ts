import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  historyReferenceBranchInternalSchema,
  historyReferenceBranchSchema,
  type HistoryReferenceBranch,
} from "../history-reference-branch.js";
import {
  historyReferenceCommitInternalSchema,
  historyReferenceCommitSchema,
  type HistoryReferenceCommit,
} from "../history-reference-commit.js";
import {
  historyReferenceCustomFieldEnumValueSchema,
  type HistoryReferenceCustomFieldEnumValue,
} from "../history-reference-custom-field-enum-value.js";
import {
  historyReferenceEpicInternalSchema,
  historyReferenceEpicSchema,
  type HistoryReferenceEpic,
} from "../history-reference-epic.js";
import { historyReferenceGeneralSchema, type HistoryReferenceGeneral } from "../history-reference-general.js";
import { historyReferenceGroupSchema, type HistoryReferenceGroup } from "../history-reference-group.js";
import {
  historyReferenceIterationInternalSchema,
  historyReferenceIterationSchema,
  type HistoryReferenceIteration,
} from "../history-reference-iteration.js";
import {
  historyReferenceLabelInternalSchema,
  historyReferenceLabelSchema,
  type HistoryReferenceLabel,
} from "../history-reference-label.js";
import {
  historyReferenceProjectInternalSchema,
  historyReferenceProjectSchema,
  type HistoryReferenceProject,
} from "../history-reference-project.js";
import {
  historyReferenceStoryTaskSchema,
  type HistoryReferenceStoryTask,
} from "../history-reference-story-task.js";
import {
  historyReferenceStoryInternalSchema,
  historyReferenceStorySchema,
  type HistoryReferenceStory,
} from "../history-reference-story.js";
import {
  historyReferenceWorkflowStateSchema,
  type HistoryReferenceWorkflowState,
} from "../history-reference-workflow-state.js";

export type Reference =
  | HistoryReferenceBranch
  | HistoryReferenceCommit
  | HistoryReferenceEpic
  | HistoryReferenceGroup
  | HistoryReferenceIteration
  | HistoryReferenceLabel
  | HistoryReferenceProject
  | HistoryReferenceStory
  | HistoryReferenceStoryTask
  | HistoryReferenceCustomFieldEnumValue
  | HistoryReferenceWorkflowState
  | HistoryReferenceGeneral;

export const referenceInternalSchema: Schema<Reference> = s.of<Reference>(
  s.union([
    s.lazy(() => historyReferenceBranchInternalSchema),
    s.lazy(() => historyReferenceCommitInternalSchema),
    s.lazy(() => historyReferenceEpicInternalSchema),
    s.lazy(() => historyReferenceGroupSchema),
    s.lazy(() => historyReferenceIterationInternalSchema),
    s.lazy(() => historyReferenceLabelInternalSchema),
    s.lazy(() => historyReferenceProjectInternalSchema),
    s.lazy(() => historyReferenceStoryInternalSchema),
    s.lazy(() => historyReferenceStoryTaskSchema),
    s.lazy(() => historyReferenceCustomFieldEnumValueSchema),
    s.lazy(() => historyReferenceWorkflowStateSchema),
    s.lazy(() => historyReferenceGeneralSchema),
  ]),
);

export const referenceSchema: Schema<Reference> = s.lazySchema(() =>
  s.of<Reference>(
    s.union([
      s.lazy(() => historyReferenceBranchSchema),
      s.lazy(() => historyReferenceCommitSchema),
      s.lazy(() => historyReferenceEpicSchema),
      s.lazy(() => historyReferenceGroupSchema),
      s.lazy(() => historyReferenceIterationSchema),
      s.lazy(() => historyReferenceLabelSchema),
      s.lazy(() => historyReferenceProjectSchema),
      s.lazy(() => historyReferenceStorySchema),
      s.lazy(() => historyReferenceStoryTaskSchema),
      s.lazy(() => historyReferenceCustomFieldEnumValueSchema),
      s.lazy(() => historyReferenceWorkflowStateSchema),
      s.lazy(() => historyReferenceGeneralSchema),
    ]),
  ),
);
