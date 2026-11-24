from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .http_body1 import HttpBody1, HttpBody1Dict


class BufferTaskRequest(SdkBaseModel):
    """Request message for BufferTask."""

    body: Optional[HttpBody1] = UNSET
    """Optional. Body of the HTTP request. The body can take any generic value. The value is written to the HttpRequest
    of the [Task]."""


class BufferTaskRequestDict(TypedDict):
    body: NotRequired[HttpBody1Dict]
