from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repository import Repository, RepositoryDict


class ListRepositoriesResponse(SdkBaseModel):
    """Message for response to listing Repositories."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    repositories: Optional[list[Repository]] = UNSET
    """The list of Repositories."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token identifying a page of results the server should return."""


class ListRepositoriesResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    repositories: NotRequired[list[RepositoryDict]]
    next_page_token: NotRequired[str]
