from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChangeMessageVisibilityBatchRequestEntry(SdkBaseModel):
    id: str = Field(alias="Id")
    """An identifier for this particular receipt handle used to communicate the result. The Ids of a batch request need
    to be unique within a request. This identifier can have up to 80 characters. The following characters are accepted:
    alphanumeric characters, hyphens(-), and underscores (_)."""

    receipt_handle: str = Field(alias="ReceiptHandle")
    """A receipt handle."""

    visibility_timeout: Optional[int] = Field(default=UNSET, alias="VisibilityTimeout")
    """The new value (in seconds) for the message's visibility timeout."""


class ChangeMessageVisibilityBatchRequestEntryDict(TypedDict):
    id: str
    receipt_handle: str
    visibility_timeout: NotRequired[int]
