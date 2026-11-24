from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_result_error_entry import BatchResultErrorEntry, BatchResultErrorEntryDict
from .change_message_visibility_batch_result_entry import (
    ChangeMessageVisibilityBatchResultEntry,
    ChangeMessageVisibilityBatchResultEntryDict,
)


class ChangeMessageVisibilityBatchResult(SdkBaseModel):
    successful: list[ChangeMessageVisibilityBatchResultEntry] = Field(alias="Successful")
    """A list of ChangeMessageVisibilityBatchResultEntry items."""

    failed: list[BatchResultErrorEntry] = Field(alias="Failed")
    """A list of BatchResultErrorEntry items."""


class ChangeMessageVisibilityBatchResultDict(TypedDict):
    successful: list[ChangeMessageVisibilityBatchResultEntryDict]
    failed: list[BatchResultErrorEntryDict]
