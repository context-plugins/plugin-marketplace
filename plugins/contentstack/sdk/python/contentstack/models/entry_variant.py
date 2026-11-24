from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EntryVariant(SdkBaseModel):
    """A personalization variant of a content entry."""

    uid: Optional[str] = UNSET
    """Unique identifier of the entry variant."""

    variant_uid: Optional[str] = UNSET
    """The variant identifier linking this entry to a personalization variant."""

    locale: Optional[str] = UNSET
    """The locale code of the entry variant."""


class EntryVariantDict(TypedDict):
    uid: NotRequired[str]
    variant_uid: NotRequired[str]
    locale: NotRequired[str]
