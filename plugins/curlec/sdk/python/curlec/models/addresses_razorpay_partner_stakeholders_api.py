from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .residential import Residential, ResidentialDict


class AddressesRazorpayPartnerStakeholdersApi(SdkBaseModel):
    residential: Optional[Residential] = UNSET


class AddressesRazorpayPartnerStakeholdersApiDict(TypedDict):
    residential: NotRequired[ResidentialDict]
