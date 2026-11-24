from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.amount_usd import AmountUsd, AmountUsdDict
from .unions.threshold_percent1 import ThresholdPercent1, ThresholdPercent1Dict


class SpendLimitUpdateRequest(SdkBaseModel):
    amount_usd: Optional[AmountUsd] = UNSET
    threshold_percent: Optional[ThresholdPercent1] = UNSET
    enabled: Optional[bool] = UNSET


class SpendLimitUpdateRequestDict(TypedDict):
    amount_usd: NotRequired[AmountUsdDict]
    threshold_percent: NotRequired[ThresholdPercent1Dict]
    enabled: NotRequired[bool]
