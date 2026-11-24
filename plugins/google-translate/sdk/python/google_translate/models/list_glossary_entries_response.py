from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary_entry import GlossaryEntry, GlossaryEntryDict


class ListGlossaryEntriesResponse(SdkBaseModel):
    """Response message for ListGlossaryEntries"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token]
    field in the subsequent calls."""

    glossary_entries: Optional[list[GlossaryEntry]] = Field(default=UNSET, alias="glossaryEntries")
    """Optional. The Glossary Entries"""


class ListGlossaryEntriesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    glossary_entries: NotRequired[list[GlossaryEntryDict]]
