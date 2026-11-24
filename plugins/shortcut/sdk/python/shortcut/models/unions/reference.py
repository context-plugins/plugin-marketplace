from __future__ import annotations

from typing import TypeAlias

from ..history_reference_branch import HistoryReferenceBranch, HistoryReferenceBranchDict
from ..history_reference_commit import HistoryReferenceCommit, HistoryReferenceCommitDict
from ..history_reference_custom_field_enum_value import (
    HistoryReferenceCustomFieldEnumValue,
    HistoryReferenceCustomFieldEnumValueDict,
)
from ..history_reference_epic import HistoryReferenceEpic, HistoryReferenceEpicDict
from ..history_reference_general import HistoryReferenceGeneral, HistoryReferenceGeneralDict
from ..history_reference_group import HistoryReferenceGroup, HistoryReferenceGroupDict
from ..history_reference_iteration import HistoryReferenceIteration, HistoryReferenceIterationDict
from ..history_reference_label import HistoryReferenceLabel, HistoryReferenceLabelDict
from ..history_reference_project import HistoryReferenceProject, HistoryReferenceProjectDict
from ..history_reference_story import HistoryReferenceStory, HistoryReferenceStoryDict
from ..history_reference_story_task import HistoryReferenceStoryTask, HistoryReferenceStoryTaskDict
from ..history_reference_workflow_state import HistoryReferenceWorkflowState, HistoryReferenceWorkflowStateDict

Reference: TypeAlias = (
    HistoryReferenceBranch
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
    | HistoryReferenceGeneral
)

ReferenceDict: TypeAlias = (
    HistoryReferenceBranchDict
    | HistoryReferenceCommitDict
    | HistoryReferenceEpicDict
    | HistoryReferenceGroupDict
    | HistoryReferenceIterationDict
    | HistoryReferenceLabelDict
    | HistoryReferenceProjectDict
    | HistoryReferenceStoryDict
    | HistoryReferenceStoryTaskDict
    | HistoryReferenceCustomFieldEnumValueDict
    | HistoryReferenceWorkflowStateDict
    | HistoryReferenceGeneralDict
)
