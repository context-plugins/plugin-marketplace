from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .user_fund_margin_v3_data2 import UserFundMarginV3Data2, UserFundMarginV3Data2Dict


class GetUserFundMarginV3Response(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[UserFundMarginV3Data2] = UNSET
    """Response data for fund and margin v3"""


class GetUserFundMarginV3ResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[UserFundMarginV3Data2Dict]
