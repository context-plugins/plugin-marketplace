from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Vpa1(SdkBaseModel):
    address: Optional[str] = UNSET


class Vpa1Dict(TypedDict):
    address: NotRequired[str]
