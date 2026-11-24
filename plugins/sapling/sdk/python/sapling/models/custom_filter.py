from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomFilter(SdkBaseModel):
    case_sensitive: Optional[bool] = UNSET
    created_at: Optional[str] = UNSET
    """RFC 1123 timestamp, e.g. "Wed, 07 Oct 2020 21:15:47 GMT"."""

    id: Optional[UUID] = UNSET
    input: Optional[str] = UNSET
    output: Optional[str] = UNSET
    updated_at: Optional[str] = UNSET
    """RFC 1123 timestamp."""


class CustomFilterDict(TypedDict):
    case_sensitive: NotRequired[bool]
    created_at: NotRequired[str]
    id: NotRequired[UUID]
    input: NotRequired[str]
    output: NotRequired[str]
    updated_at: NotRequired[str]
