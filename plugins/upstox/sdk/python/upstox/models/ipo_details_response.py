from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .ipo_details_data import IpoDetailsData, IpoDetailsDataDict


class IpoDetailsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[IpoDetailsData] = UNSET


class IpoDetailsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[IpoDetailsDataDict]
