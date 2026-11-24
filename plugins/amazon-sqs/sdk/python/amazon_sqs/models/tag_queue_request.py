from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagQueueRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the queue."""

    tags: dict[str, str] = Field(alias="Tags")
    """The list of tags to be added to the specified queue."""


class TagQueueRequestDict(TypedDict):
    queue_url: str
    tags: dict[str, str]
