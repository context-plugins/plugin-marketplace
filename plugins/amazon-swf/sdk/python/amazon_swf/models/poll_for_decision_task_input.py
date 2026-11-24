from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_list import TaskList, TaskListDict


class PollForDecisionTaskInput(SdkBaseModel):
    domain: str
    """The name of the domain containing the task lists to poll."""

    task_list: TaskList = Field(alias="taskList")
    identity: Optional[str] = UNSET
    """Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow
    history. This enables diagnostic tracing when problems arise. The form of this identity is user defined."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination
    token for each page. Make the call again using the returned token to retrieve the next page. Keep all other
    arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a
    400 error: "Specified token has exceeded its maximum lifetime". The configured maximumPageSize determines how many
    results can be returned in a single call. The nextPageToken returned by this action cannot be used with
    GetWorkflowExecutionHistory to get the next p"""

    maximum_page_size: Optional[int] = Field(default=UNSET, alias="maximumPageSize")
    """The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results.
    This is an upper limit only; the actual number of results returned per call may be fewer than the specified
    maximum."""

    reverse_order: Optional[bool] = Field(default=UNSET, alias="reverseOrder")
    """When set to true, returns the events in reverse order. By default the results are returned in ascending order of
    the eventTimestamp of the events."""

    start_at_previous_started_event: Optional[bool] = Field(default=UNSET, alias="startAtPreviousStartedEvent")
    """When set to true, returns the events with eventTimestamp greater than or equal to eventTimestamp of the most
    recent DecisionTaskStarted event. By default, this parameter is set to false."""


class PollForDecisionTaskInputDict(TypedDict):
    domain: str
    task_list: TaskListDict
    identity: NotRequired[str]
    next_page_token: NotRequired[str]
    maximum_page_size: NotRequired[int]
    reverse_order: NotRequired[bool]
    start_at_previous_started_event: NotRequired[bool]
