from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListBuildsForProjectOutput(SdkBaseModel):
    ids: Optional[list[str]] = UNSET
    """A list of build identifiers for the specified build project, with each build ID representing a single build."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string
    called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to
    the call."""


class ListBuildsForProjectOutputDict(TypedDict):
    ids: NotRequired[list[str]]
    next_token: NotRequired[str]
