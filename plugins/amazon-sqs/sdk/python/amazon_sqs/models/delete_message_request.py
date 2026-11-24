from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteMessageRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue from which messages are deleted. Queue URLs and names are case-sensitive."""

    receipt_handle: str = Field(alias="ReceiptHandle")
    """The receipt handle associated with the message to delete."""


class DeleteMessageRequestDict(TypedDict):
    queue_url: str
    receipt_handle: str
