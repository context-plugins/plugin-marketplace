from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .send_message_batch_request_entry import SendMessageBatchRequestEntry, SendMessageBatchRequestEntryDict


class SendMessageBatchRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue to which batched messages are sent. Queue URLs and names are case-sensitive."""

    entries: list[SendMessageBatchRequestEntry] = Field(alias="Entries")
    """A list of SendMessageBatchRequestEntry items."""


class SendMessageBatchRequestDict(TypedDict):
    queue_url: str
    entries: list[SendMessageBatchRequestEntryDict]
