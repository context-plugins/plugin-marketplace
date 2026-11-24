from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PurgeQueueRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the queue from which the PurgeQueue action deletes messages. Queue URLs and names are
    case-sensitive."""


class PurgeQueueRequestDict(TypedDict):
    queue_url: str
