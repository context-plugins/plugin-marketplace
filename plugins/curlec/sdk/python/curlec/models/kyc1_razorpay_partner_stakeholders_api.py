from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Kyc1RazorpayPartnerStakeholdersApi(SdkBaseModel):
    pan: Optional[str] = UNSET
    """Individual PAN. 4th character must be 'P'."""


class Kyc1RazorpayPartnerStakeholdersApiDict(TypedDict):
    pan: NotRequired[str]
