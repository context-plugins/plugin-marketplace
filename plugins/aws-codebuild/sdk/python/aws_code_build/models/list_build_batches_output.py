from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListBuildBatchesOutput(SdkBaseModel):
    ids: Optional[list[str]] = UNSET
    """An array of strings that contains the batch build identifiers."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If there are more items to return, this contains a token that is passed to a subsequent call to ListBuildBatches
    to retrieve the next set of items."""


class ListBuildBatchesOutputDict(TypedDict):
    ids: NotRequired[list[str]]
    next_token: NotRequired[str]
