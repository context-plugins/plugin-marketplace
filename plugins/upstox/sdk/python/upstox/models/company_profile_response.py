from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_profile_data import CompanyProfileData, CompanyProfileDataDict
from .enums.status import StatusOrStr


class CompanyProfileResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[CompanyProfileData] = UNSET


class CompanyProfileResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[CompanyProfileDataDict]
