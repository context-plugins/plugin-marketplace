from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_result_error_entry import BatchResultErrorEntry, BatchResultErrorEntryDict
from .send_message_batch_result_entry import SendMessageBatchResultEntry, SendMessageBatchResultEntryDict


class SendMessageBatchResult(SdkBaseModel):
    successful: list[SendMessageBatchResultEntry] = Field(alias="Successful")
    """A list of SendMessageBatchResultEntry items."""

    failed: list[BatchResultErrorEntry] = Field(alias="Failed")
    """A list of BatchResultErrorEntry items with error details about each message that can't be enqueued."""


class SendMessageBatchResultDict(TypedDict):
    successful: list[SendMessageBatchResultEntryDict]
    failed: list[BatchResultErrorEntryDict]
