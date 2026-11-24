from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage_attempt_tasks_summary2 import StageAttemptTasksSummary2, StageAttemptTasksSummary2Dict


class SummarizeSessionSparkApplicationStageAttemptTasksResponse(SdkBaseModel):
    """Summary of tasks for a Spark Application stage attempt."""

    stage_attempt_tasks_summary: Optional[StageAttemptTasksSummary2] = Field(
        default=UNSET, alias="stageAttemptTasksSummary"
    )
    """Summary of tasks for a Spark Application Stage Attempt"""


class SummarizeSessionSparkApplicationStageAttemptTasksResponseDict(TypedDict):
    stage_attempt_tasks_summary: NotRequired[StageAttemptTasksSummary2Dict]
