from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_result_error_entry import BatchResultErrorEntry, BatchResultErrorEntryDict
from .delete_message_batch_result_entry import DeleteMessageBatchResultEntry, DeleteMessageBatchResultEntryDict


class DeleteMessageBatchResult(SdkBaseModel):
    successful: list[DeleteMessageBatchResultEntry] = Field(alias="Successful")
    """A list of DeleteMessageBatchResultEntry items."""

    failed: list[BatchResultErrorEntry] = Field(alias="Failed")
    """A list of BatchResultErrorEntry items."""


class DeleteMessageBatchResultDict(TypedDict):
    successful: list[DeleteMessageBatchResultEntryDict]
    failed: list[BatchResultErrorEntryDict]
