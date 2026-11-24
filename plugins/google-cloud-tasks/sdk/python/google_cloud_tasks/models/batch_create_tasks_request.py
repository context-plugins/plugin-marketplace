from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_task_request import CreateTaskRequest, CreateTaskRequestDict


class BatchCreateTasksRequest(SdkBaseModel):
    """Request message for [BatchCreateTasks]."""

    requests: Optional[list[CreateTaskRequest]] = UNSET
    """Required. The list of requests to create tasks. The queue specified in parent field of each CreateTaskRequest
    will be the same. This validation happens on the client side as well as in the handler.
    BatchCreateTasksRequest.parent will also be the same value as the individual ``CreateTaskRequest.parent``. The
    maximum number of requests is 100."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. This field will be used to identify the long running operation, avoiding duplication when user retries.
    If not provided, then a UUID will be generated at server side."""


class BatchCreateTasksRequestDict(TypedDict):
    requests: NotRequired[list[CreateTaskRequestDict]]
    request_id: NotRequired[str]
