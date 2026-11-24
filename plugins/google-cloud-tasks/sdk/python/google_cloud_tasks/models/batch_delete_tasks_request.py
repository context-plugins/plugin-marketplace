from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchDeleteTasksRequest(SdkBaseModel):
    """Request message for deleting a batch of tasks using BatchDeleteTasks."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. This field will be used to identify the long running operation, avoiding duplication when user retries.
    If not provided, then a UUID will be generated at server side."""

    names: Optional[list[str]] = UNSET
    """Required. The names of the tasks to delete. A maximum of 1000 tasks can be deleted in a batch. For example:
    Format: ``projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID``"""


class BatchDeleteTasksRequestDict(TypedDict):
    request_id: NotRequired[str]
    names: NotRequired[list[str]]
