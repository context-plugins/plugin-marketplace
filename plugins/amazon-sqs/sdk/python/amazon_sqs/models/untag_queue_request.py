from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UntagQueueRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the queue."""

    tag_keys: list[str] = Field(alias="TagKeys")
    """The list of tags to be removed from the specified queue."""


class UntagQueueRequestDict(TypedDict):
    queue_url: str
    tag_keys: list[str]
