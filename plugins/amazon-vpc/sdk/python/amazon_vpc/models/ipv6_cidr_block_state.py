from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Ipv6CidrBlockState(SdkBaseModel):
    state: Optional[str] = UNSET


class Ipv6CidrBlockStateDict(TypedDict):
    state: NotRequired[str]
