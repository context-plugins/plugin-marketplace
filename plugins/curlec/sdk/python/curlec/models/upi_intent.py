from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpiIntent(SdkBaseModel):
    """Present only for reverse penny drop (UPI intent flow)"""

    intent_url: Optional[str] = UNSET
    phonepe_url: Optional[str] = UNSET
    gpay_url: Optional[str] = UNSET
    paytm_url: Optional[str] = UNSET
    bhim_url: Optional[str] = UNSET
    encoded_qr_code: Optional[str] = UNSET


class UpiIntentDict(TypedDict):
    intent_url: NotRequired[str]
    phonepe_url: NotRequired[str]
    gpay_url: NotRequired[str]
    paytm_url: NotRequired[str]
    bhim_url: NotRequired[str]
    encoded_qr_code: NotRequired[str]
