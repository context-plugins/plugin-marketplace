from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .decision_deliverd_dev_tasks_api import DecisionDeliverdDevTasksApi, DecisionDeliverdDevTasksApiDict
from .finding_deliverd_dev_tasks_api import FindingDeliverdDevTasksApi, FindingDeliverdDevTasksApiDict


class ApiV1TasksCompleteRequest(SdkBaseModel):
    summary: str
    """What was found, in a few sentences"""

    findings: Optional[list[FindingDeliverdDevTasksApi]] = UNSET
    decisions: Optional[list[DecisionDeliverdDevTasksApi]] = UNSET
    """Decisions you propose. They reach the parent as suggestions; a person confirms them"""

    recommendations: Optional[list[str]] = UNSET
    unresolved_questions: Optional[list[str]] = Field(default=UNSET, alias="unresolvedQuestions")
    """Still open; added to the parent's open questions when applied"""

    parent_impact: Optional[str] = Field(default=UNSET, alias="parentImpact")
    """What this means for the main task"""

    suggested_next_action: Optional[str] = Field(default=UNSET, alias="suggestedNextAction")
    """Becomes the parent's next action when applied"""


class ApiV1TasksCompleteRequestDict(TypedDict):
    summary: str
    findings: NotRequired[list[FindingDeliverdDevTasksApiDict]]
    decisions: NotRequired[list[DecisionDeliverdDevTasksApiDict]]
    recommendations: NotRequired[list[str]]
    unresolved_questions: NotRequired[list[str]]
    parent_impact: NotRequired[str]
    suggested_next_action: NotRequired[str]
