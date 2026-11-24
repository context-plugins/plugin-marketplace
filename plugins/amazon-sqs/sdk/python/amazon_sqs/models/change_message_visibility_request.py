from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ChangeMessageVisibilityRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue whose message's visibility is changed. Queue URLs and names are
    case-sensitive."""

    receipt_handle: str = Field(alias="ReceiptHandle")
    """The receipt handle associated with the message, whose visibility timeout is changed. This parameter is returned
    by the ReceiveMessage action."""

    visibility_timeout: int = Field(alias="VisibilityTimeout")
    """The new value for the message's visibility timeout (in seconds). Values range: 0 to 43200. Maximum: 12 hours."""


class ChangeMessageVisibilityRequestDict(TypedDict):
    queue_url: str
    receipt_handle: str
    visibility_timeout: int
