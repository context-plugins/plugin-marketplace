from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MarginFromPledge(SdkBaseModel):
    total: Optional[float] = UNSET
    equity: Optional[float] = UNSET
    mutual_funds: Optional[float] = UNSET


class MarginFromPledgeDict(TypedDict):
    total: NotRequired[float]
    equity: NotRequired[float]
    mutual_funds: NotRequired[float]
