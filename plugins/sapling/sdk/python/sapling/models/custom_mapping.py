from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomMapping(SdkBaseModel):
    case_sensitive: Optional[bool] = UNSET
    created_at: Optional[str] = UNSET
    """RFC 1123 timestamp, e.g. "Wed, 07 Oct 2020 21:15:47 GMT"."""

    description: Optional[Any] = UNSET
    """Shown to the user with the suggestion; null when none was set."""

    entry: Optional[str] = UNSET
    id: Optional[UUID] = UNSET
    mapping: Optional[str] = UNSET
    updated_at: Optional[str] = UNSET
    """RFC 1123 timestamp."""


class CustomMappingDict(TypedDict):
    case_sensitive: NotRequired[bool]
    created_at: NotRequired[str]
    description: NotRequired[Any]
    entry: NotRequired[str]
    id: NotRequired[UUID]
    mapping: NotRequired[str]
    updated_at: NotRequired[str]
