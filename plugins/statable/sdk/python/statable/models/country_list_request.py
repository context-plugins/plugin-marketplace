from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CountryListRequest(SdkBaseModel):
    """ISO 3166-1 alpha-2 codes. Replaces both lists."""

    allowed: Optional[list[str]] = UNSET
    blocked: Optional[list[str]] = UNSET


class CountryListRequestDict(TypedDict):
    allowed: NotRequired[list[str]]
    blocked: NotRequired[list[str]]
