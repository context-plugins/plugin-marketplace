from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.response_view import ResponseViewOrStr


class RunTaskRequest(SdkBaseModel):
    """Request message for forcing a task to run now using RunTask."""

    response_view: Optional[ResponseViewOrStr] = Field(default=UNSET, alias="responseView")
    """The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all
    information is retrieved by default because some data, such as payloads, might be desirable to return only when
    needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL
    requires ``cloudtasks.tasks.fullView`` `Google IAM <https://cloud.google.com/iam/>`__ permission on the Task
    resource."""


class RunTaskRequestDict(TypedDict):
    response_view: NotRequired[ResponseViewOrStr]
