from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpSecurityNetwork(SdkBaseModel):
    connection_type: Optional[str] = UNSET
    route: Optional[str] = UNSET
    is_anycast: Optional[bool] = UNSET


class IpSecurityNetworkDict(TypedDict):
    connection_type: NotRequired[str]
    route: NotRequired[str]
    is_anycast: NotRequired[bool]
