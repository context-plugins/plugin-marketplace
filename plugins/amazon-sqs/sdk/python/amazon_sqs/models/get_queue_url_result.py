from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetQueueUrlResult(SdkBaseModel):
    queue_url: Optional[str] = Field(default=UNSET, alias="QueueUrl")
    """The URL of the queue."""


class GetQueueUrlResultDict(TypedDict):
    queue_url: NotRequired[str]
