from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .usage import Usage, UsageDict


class ApiV1DictionaryResponse1(SdkBaseModel):
    case_sensitive: Optional[bool] = UNSET
    created_at: Optional[str] = UNSET
    """RFC 1123 timestamp, e.g. "Wed, 07 Oct 2020 21:15:47 GMT"."""

    entry: Optional[str] = UNSET
    id: Optional[UUID] = UNSET
    updated_at: Optional[str] = UNSET
    """RFC 1123 timestamp."""

    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1DictionaryResponse1Dict(TypedDict):
    case_sensitive: NotRequired[bool]
    created_at: NotRequired[str]
    entry: NotRequired[str]
    id: NotRequired[UUID]
    updated_at: NotRequired[str]
    usage: NotRequired[UsageDict]
