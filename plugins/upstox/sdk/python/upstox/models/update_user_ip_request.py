from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateUserIpRequest(SdkBaseModel):
    primary_ip: Optional[str] = UNSET
    secondary_ip: Optional[str] = UNSET


class UpdateUserIpRequestDict(TypedDict):
    primary_ip: NotRequired[str]
    secondary_ip: NotRequired[str]
