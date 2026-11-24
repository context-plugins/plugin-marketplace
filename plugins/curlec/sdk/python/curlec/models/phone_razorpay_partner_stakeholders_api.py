from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhoneRazorpayPartnerStakeholdersApi(SdkBaseModel):
    primary: Optional[str] = UNSET
    secondary: Optional[str] = UNSET


class PhoneRazorpayPartnerStakeholdersApiDict(TypedDict):
    primary: NotRequired[str]
    secondary: NotRequired[str]
