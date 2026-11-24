from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListFleetsOutput(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string
    called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to
    the call."""

    fleets: Optional[list[str]] = UNSET
    """The list of compute fleet names."""


class ListFleetsOutputDict(TypedDict):
    next_token: NotRequired[str]
    fleets: NotRequired[list[str]]
