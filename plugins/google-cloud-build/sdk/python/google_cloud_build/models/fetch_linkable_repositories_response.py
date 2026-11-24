from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repository import Repository, RepositoryDict


class FetchLinkableRepositoriesResponse(SdkBaseModel):
    """Response message for FetchLinkableRepositories."""

    repositories: Optional[list[Repository]] = UNSET
    """repositories ready to be created."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token identifying a page of results the server should return."""


class FetchLinkableRepositoriesResponseDict(TypedDict):
    repositories: NotRequired[list[RepositoryDict]]
    next_page_token: NotRequired[str]
