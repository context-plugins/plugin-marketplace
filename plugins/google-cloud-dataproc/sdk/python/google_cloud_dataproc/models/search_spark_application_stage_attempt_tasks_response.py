from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_data import TaskData, TaskDataDict


class SearchSparkApplicationStageAttemptTasksResponse(SdkBaseModel):
    """List of tasks for a stage of a Spark Application"""

    spark_application_stage_attempt_tasks: Optional[list[TaskData]] = Field(
        default=UNSET, alias="sparkApplicationStageAttemptTasks"
    )
    """Output only. Data corresponding to tasks created by spark."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent ListSparkApplicationStageAttemptTasksRequest."""


class SearchSparkApplicationStageAttemptTasksResponseDict(TypedDict):
    spark_application_stage_attempt_tasks: NotRequired[list[TaskDataDict]]
    next_page_token: NotRequired[str]
