from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .user_fund_margin_data import UserFundMarginData, UserFundMarginDataDict


class GetUserFundMarginResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, UserFundMarginData]] = UNSET
    """Response data for Balance"""


class GetUserFundMarginResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, UserFundMarginDataDict]]
