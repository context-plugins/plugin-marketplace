from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BulkWhoisItem(SdkBaseModel):
    """One bulk WHOIS result; success items also carry all WhoisResponse fields."""

    status: Optional[bool] = UNSET
    domain_name: Optional[str] = UNSET
    error: Optional[str] = UNSET


class BulkWhoisItemDict(TypedDict):
    status: NotRequired[bool]
    domain_name: NotRequired[str]
    error: NotRequired[str]
