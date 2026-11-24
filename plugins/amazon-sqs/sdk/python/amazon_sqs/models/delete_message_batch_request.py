from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .delete_message_batch_request_entry import DeleteMessageBatchRequestEntry, DeleteMessageBatchRequestEntryDict


class DeleteMessageBatchRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue from which messages are deleted. Queue URLs and names are case-sensitive."""

    entries: list[DeleteMessageBatchRequestEntry] = Field(alias="Entries")
    """Lists the receipt handles for the messages to be deleted."""


class DeleteMessageBatchRequestDict(TypedDict):
    queue_url: str
    entries: list[DeleteMessageBatchRequestEntryDict]
