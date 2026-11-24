from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListProjectsOutput(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string
    called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to
    the call."""

    projects: Optional[list[str]] = UNSET
    """The list of build project names, with each build project name representing a single build project."""


class ListProjectsOutputDict(TypedDict):
    next_token: NotRequired[str]
    projects: NotRequired[list[str]]
