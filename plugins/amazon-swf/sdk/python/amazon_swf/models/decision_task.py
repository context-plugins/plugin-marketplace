from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .history_event import HistoryEvent, HistoryEventDict
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class DecisionTask(SdkBaseModel):
    task_token: str = Field(alias="taskToken")
    """The opaque string used as a handle on the task. This token is used by workers to communicate progress and
    response information back to the system about the task."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the DecisionTaskStarted event recorded in the history."""

    workflow_execution: WorkflowExecution = Field(alias="workflowExecution")
    workflow_type: WorkflowType = Field(alias="workflowType")
    events: list[HistoryEvent]
    """A paginated list of history events of the workflow execution. The decider uses this during the processing of the
    decision task."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page
    of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The
    configured maximumPageSize determines how many results can be returned in a single call."""

    previous_started_event_id: Optional[int] = Field(default=UNSET, alias="previousStartedEventId")
    """The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was
    processed by the decider. This can be used to determine the events in the history new since the last decision task
    received by the decider."""


class DecisionTaskDict(TypedDict):
    task_token: str
    started_event_id: int
    workflow_execution: WorkflowExecutionDict
    workflow_type: WorkflowTypeDict
    events: list[HistoryEventDict]
    next_page_token: NotRequired[str]
    previous_started_event_id: NotRequired[int]
