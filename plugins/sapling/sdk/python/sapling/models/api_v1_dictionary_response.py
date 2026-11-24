from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1DictionaryResponse(SdkBaseModel):
    case_sensitive: Optional[bool] = UNSET
    created_at: Optional[str] = UNSET
    """RFC 1123 timestamp, e.g. "Wed, 07 Oct 2020 21:15:47 GMT"."""

    entry: Optional[str] = UNSET
    id: Optional[UUID] = UNSET
    updated_at: Optional[str] = UNSET
    """RFC 1123 timestamp."""


class ApiV1DictionaryResponseDict(TypedDict):
    case_sensitive: NotRequired[bool]
    created_at: NotRequired[str]
    entry: NotRequired[str]
    id: NotRequired[UUID]
    updated_at: NotRequired[str]
