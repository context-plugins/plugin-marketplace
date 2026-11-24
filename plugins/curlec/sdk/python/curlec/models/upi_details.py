from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpiDetails(SdkBaseModel):
    payer_account_type: Optional[str] = UNSET
    vpa: Optional[str] = UNSET
    """Customer UPI VPA (Virtual Payment Address). Example: user@upi."""

    flow: Optional[str] = UNSET
    """UPI flow used: collect, intent, or in_app."""


class UpiDetailsDict(TypedDict):
    payer_account_type: NotRequired[str]
    vpa: NotRequired[str]
    flow: NotRequired[str]
