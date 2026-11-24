from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .batch import Batch, BatchDict


class ListBatchesResponse(SdkBaseModel):
    """A list of batch workloads."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    unreachable: Optional[list[str]] = UNSET
    """Output only. List of Batches that could not be included in the response. Attempting to get one of these resources
    may indicate why it was not included in the list response."""

    batches: Optional[list[Batch]] = UNSET
    """Output only. The batches from the specified collection."""


class ListBatchesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
    batches: NotRequired[list[BatchDict]]
