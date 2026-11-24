from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateQueueResult(SdkBaseModel):
    queue_url: Optional[str] = Field(default=UNSET, alias="QueueUrl")
    """The URL of the created Amazon SQS queue."""


class CreateQueueResultDict(TypedDict):
    queue_url: NotRequired[str]
