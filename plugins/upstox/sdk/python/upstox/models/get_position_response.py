from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .order_metadata import OrderMetadata, OrderMetadataDict
from .position_data import PositionData, PositionDataDict


class GetPositionResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[PositionData]] = UNSET
    """Response data for position details"""

    metadata: Optional[OrderMetadata] = UNSET


class GetPositionResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[PositionDataDict]]
    metadata: NotRequired[OrderMetadataDict]
