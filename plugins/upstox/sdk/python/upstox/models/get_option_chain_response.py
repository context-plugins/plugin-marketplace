from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .option_strike_data import OptionStrikeData, OptionStrikeDataDict


class GetOptionChainResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[OptionStrikeData]] = UNSET
    """Response data for option chain data"""


class GetOptionChainResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[OptionStrikeDataDict]]
