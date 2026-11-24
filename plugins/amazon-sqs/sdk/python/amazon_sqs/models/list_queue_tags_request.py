from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListQueueTagsRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the queue."""


class ListQueueTagsRequestDict(TypedDict):
    queue_url: str
