from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .delivery_margin import DeliveryMargin, DeliveryMarginDict
from .loss import Loss, LossDict


class CashMarginUsed(SdkBaseModel):
    total: Optional[float] = UNSET
    mtf: Optional[float] = UNSET
    loss: Optional[Loss] = UNSET
    span_exposure: Optional[float] = UNSET
    cash_margin_var_elm: Optional[float] = UNSET
    premium_present: Optional[float] = UNSET
    delivery_margin: Optional[DeliveryMargin] = UNSET


class CashMarginUsedDict(TypedDict):
    total: NotRequired[float]
    mtf: NotRequired[float]
    loss: NotRequired[LossDict]
    span_exposure: NotRequired[float]
    cash_margin_var_elm: NotRequired[float]
    premium_present: NotRequired[float]
    delivery_margin: NotRequired[DeliveryMarginDict]
