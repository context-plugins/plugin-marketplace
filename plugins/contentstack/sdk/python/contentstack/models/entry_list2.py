from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entry2 import Entry2, Entry2Dict


class EntryList2(SdkBaseModel):
    """A paginated list of entries."""

    entries: Optional[list[Entry2]] = UNSET
    """Array of entry objects."""

    count: Optional[int] = UNSET
    """Total number of entries."""


class EntryList2Dict(TypedDict):
    entries: NotRequired[list[Entry2Dict]]
    count: NotRequired[int]
