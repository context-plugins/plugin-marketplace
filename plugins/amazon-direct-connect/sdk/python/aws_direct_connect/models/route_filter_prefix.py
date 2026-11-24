from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RouteFilterPrefix(SdkBaseModel):
    cidr: Optional[str] = UNSET
    """The CIDR block for the advertised route. Separate multiple routes using commas. An IPv6 CIDR must use /64 or
    shorter."""


class RouteFilterPrefixDict(TypedDict):
    cidr: NotRequired[str]
