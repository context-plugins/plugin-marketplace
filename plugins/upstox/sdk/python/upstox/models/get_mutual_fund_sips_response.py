from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .mutual_fund_meta_data2 import MutualFundMetaData2, MutualFundMetaData2Dict
from .mutual_fund_sip_data import MutualFundSipData, MutualFundSipDataDict


class GetMutualFundSipsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[MutualFundSipData]] = UNSET
    """Open SIP orders (active and paused)."""

    meta_data: Optional[MutualFundMetaData2] = UNSET
    """Meta data for mutual fund sips"""


class GetMutualFundSipsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[MutualFundSipDataDict]]
    meta_data: NotRequired[MutualFundMetaData2Dict]
