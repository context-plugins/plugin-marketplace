from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .settlements1 import Settlements1, Settlements1Dict


class V2AccountsProductsRequest1(SdkBaseModel):
    settlements: Optional[Settlements1] = UNSET
    tnc_accepted: Optional[bool] = UNSET


class V2AccountsProductsRequest1Dict(TypedDict):
    settlements: NotRequired[Settlements1Dict]
    tnc_accepted: NotRequired[bool]
