from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .instrument_data import InstrumentData, InstrumentDataDict
from .search_meta_data2 import SearchMetaData2, SearchMetaData2Dict


class SearchInstrumentResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[InstrumentData]] = UNSET
    """Response data for search instrument request"""

    meta_data: Optional[SearchMetaData2] = UNSET
    """Meta data for search instrument response"""


class SearchInstrumentResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[InstrumentDataDict]]
    meta_data: NotRequired[SearchMetaData2Dict]
