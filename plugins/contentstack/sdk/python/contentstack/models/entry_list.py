from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entry import Entry, EntryDict


class EntryList(SdkBaseModel):
    """A paginated list of published entries."""

    entries: Optional[list[Entry]] = UNSET
    """Array of entry objects."""

    count: Optional[int] = UNSET
    """Total count of matching entries when include_count is true."""


class EntryListDict(TypedDict):
    entries: NotRequired[list[EntryDict]]
    count: NotRequired[int]
