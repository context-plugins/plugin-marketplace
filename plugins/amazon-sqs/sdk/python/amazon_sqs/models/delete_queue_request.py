from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteQueueRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue to delete. Queue URLs and names are case-sensitive."""


class DeleteQueueRequestDict(TypedDict):
    queue_url: str
