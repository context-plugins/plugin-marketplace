from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sipaccount4 import Sipaccount4, Sipaccount4Dict


class ApiV1SipaccountsRequest1(SdkBaseModel):
    sipaccount: Optional[Sipaccount4] = UNSET


class ApiV1SipaccountsRequest1Dict(TypedDict):
    sipaccount: NotRequired[Sipaccount4Dict]
