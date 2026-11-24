from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entry_variant import EntryVariant, EntryVariantDict


class EntryVariantList(SdkBaseModel):
    """A list of personalization variants for an entry."""

    entries: Optional[list[EntryVariant]] = UNSET
    """Array of entry variant objects."""


class EntryVariantListDict(TypedDict):
    entries: NotRequired[list[EntryVariantDict]]
