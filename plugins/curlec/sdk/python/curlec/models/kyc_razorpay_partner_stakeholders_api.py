from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KycRazorpayPartnerStakeholdersApi(SdkBaseModel):
    pan: Optional[str] = UNSET


class KycRazorpayPartnerStakeholdersApiDict(TypedDict):
    pan: NotRequired[str]
