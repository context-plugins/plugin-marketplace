from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FetchGitRefsResponse(SdkBaseModel):
    """Response for fetching git refs"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token identifying a page of results the server should return."""

    ref_names: Optional[list[str]] = Field(default=UNSET, alias="refNames")
    """Name of the refs fetched."""


class FetchGitRefsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    ref_names: NotRequired[list[str]]
