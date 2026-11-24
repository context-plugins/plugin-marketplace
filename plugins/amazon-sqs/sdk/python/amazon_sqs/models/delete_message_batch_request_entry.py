from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteMessageBatchRequestEntry(SdkBaseModel):
    id: str = Field(alias="Id")
    """The identifier for this particular receipt handle. This is used to communicate the result. The Ids of a batch
    request need to be unique within a request. This identifier can have up to 80 characters. The following characters
    are accepted: alphanumeric characters, hyphens(-), and underscores (_)."""

    receipt_handle: str = Field(alias="ReceiptHandle")
    """A receipt handle."""


class DeleteMessageBatchRequestEntryDict(TypedDict):
    id: str
    receipt_handle: str
