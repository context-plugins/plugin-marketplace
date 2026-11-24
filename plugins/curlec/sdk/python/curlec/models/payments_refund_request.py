from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.speed import Speed, SpeedOrStr


class PaymentsRefundRequest(SdkBaseModel):
    amount: Optional[int] = UNSET
    """Refund amount in paise. Omit to refund the full payment amount."""

    speed: SpeedOrStr = Speed.NORMAL
    """normal: 5-7 business days. optimum: instant if available, falls back to normal."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    receipt: Optional[str] = UNSET
    """Your internal reference identifier."""


class PaymentsRefundRequestDict(TypedDict):
    amount: NotRequired[int]
    speed: NotRequired[SpeedOrStr]
    notes: NotRequired[dict[str, str]]
    receipt: NotRequired[str]
