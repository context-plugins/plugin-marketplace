from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary import Glossary, GlossaryDict


class ListGlossariesResponse(SdkBaseModel):
    """Response message for ListGlossaries."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the
    subsequent call to ``ListGlossaries`` method to retrieve the next page of results."""

    glossaries: Optional[list[Glossary]] = UNSET
    """The list of glossaries for a project."""


class ListGlossariesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    glossaries: NotRequired[list[GlossaryDict]]
