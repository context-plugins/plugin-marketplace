from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entry import Entry, EntryDict


class Sanctions(SdkBaseModel):
    entries: Optional[list[Entry]] = UNSET


class SanctionsDict(TypedDict):
    entries: NotRequired[list[EntryDict]]
