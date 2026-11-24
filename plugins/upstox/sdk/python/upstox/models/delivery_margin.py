from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeliveryMargin(SdkBaseModel):
    total: Optional[float] = UNSET
    equity: Optional[float] = UNSET
    fo_settlement: Optional[float] = UNSET


class DeliveryMarginDict(TypedDict):
    total: NotRequired[float]
    equity: NotRequired[float]
    fo_settlement: NotRequired[float]
