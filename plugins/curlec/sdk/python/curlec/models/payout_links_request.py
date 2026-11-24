from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PayoutLinksRequest(SdkBaseModel):
    contact_id: str
    amount: int
    """Amount in paise"""

    currency: Literal["INR"] = "INR"
    purpose: str
    description: Optional[str] = UNSET
    receipt: Optional[str] = UNSET
    send_sms: Optional[bool] = UNSET
    send_email: Optional[bool] = UNSET
    notes: Optional[Any] = UNSET
    expire_by: Optional[int] = UNSET
    """Unix timestamp; must be ≥15 minutes from now"""


class PayoutLinksRequestDict(TypedDict):
    contact_id: str
    amount: int
    currency: Literal["INR"]
    purpose: str
    description: NotRequired[str]
    receipt: NotRequired[str]
    send_sms: NotRequired[bool]
    send_email: NotRequired[bool]
    notes: NotRequired[Any]
    expire_by: NotRequired[int]
