from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Entry2(SdkBaseModel):
    """A content entry with field values and system metadata."""

    uid: Optional[str] = UNSET
    """Unique identifier of the entry."""

    title: Optional[str] = UNSET
    """Title of the entry."""

    locale: Optional[str] = UNSET
    """Locale code of the entry."""

    version: Optional[int] = Field(default=UNSET, alias="_version")
    """Version number of the entry."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the entry was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the entry was last updated."""


class Entry2Dict(TypedDict):
    uid: NotRequired[str]
    title: NotRequired[str]
    locale: NotRequired[str]
    version: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
