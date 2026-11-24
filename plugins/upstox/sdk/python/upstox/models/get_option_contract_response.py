from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .instrument_data import InstrumentData, InstrumentDataDict


class GetOptionContractResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[InstrumentData]] = UNSET
    """Response data for option contracts"""


class GetOptionContractResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[InstrumentDataDict]]
