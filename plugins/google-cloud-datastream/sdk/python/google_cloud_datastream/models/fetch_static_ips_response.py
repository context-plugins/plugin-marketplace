from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FetchStaticIpsResponse(SdkBaseModel):
    """Response message for a 'FetchStaticIps' response."""

    static_ips: Optional[list[str]] = Field(default=UNSET, alias="staticIps")
    """list of static ips by account"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class FetchStaticIpsResponseDict(TypedDict):
    static_ips: NotRequired[list[str]]
    next_page_token: NotRequired[str]
