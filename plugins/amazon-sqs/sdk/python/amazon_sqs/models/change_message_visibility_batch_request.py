from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .change_message_visibility_batch_request_entry import (
    ChangeMessageVisibilityBatchRequestEntry,
    ChangeMessageVisibilityBatchRequestEntryDict,
)


class ChangeMessageVisibilityBatchRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue whose messages' visibility is changed. Queue URLs and names are
    case-sensitive."""

    entries: list[ChangeMessageVisibilityBatchRequestEntry] = Field(alias="Entries")
    """Lists the receipt handles of the messages for which the visibility timeout must be changed."""


class ChangeMessageVisibilityBatchRequestDict(TypedDict):
    queue_url: str
    entries: list[ChangeMessageVisibilityBatchRequestEntryDict]
