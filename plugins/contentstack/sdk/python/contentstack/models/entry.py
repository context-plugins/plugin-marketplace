from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Entry(SdkBaseModel):
    """A published content entry with all its field values."""

    uid: Optional[str] = UNSET
    """Unique identifier of the entry."""

    title: Optional[str] = UNSET
    """The title of the entry."""

    locale: Optional[str] = UNSET
    """The locale code of the entry."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the entry was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the entry was last updated."""

    published_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the entry was last published."""


class EntryDict(TypedDict):
    uid: NotRequired[str]
    title: NotRequired[str]
    locale: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    published_at: NotRequired[RFC3339DateTime]
