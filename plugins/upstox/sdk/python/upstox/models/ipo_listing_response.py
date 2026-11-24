from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .ipo_listing_data import IpoListingData, IpoListingDataDict
from .ipo_meta_data import IpoMetaData, IpoMetaDataDict


class IpoListingResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[IpoListingData]] = UNSET
    meta_data: Optional[IpoMetaData] = UNSET


class IpoListingResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[IpoListingDataDict]]
    meta_data: NotRequired[IpoMetaDataDict]
