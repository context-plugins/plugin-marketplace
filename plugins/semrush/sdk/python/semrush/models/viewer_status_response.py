from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_semrush_partner_service_api import DataSemrushPartnerServiceApi, DataSemrushPartnerServiceApiDict
from .response_meta import ResponseMeta, ResponseMetaDict


class ViewerStatusResponse(SdkBaseModel):
    """Viewer Status response object"""

    meta: Optional[ResponseMeta] = UNSET
    """Response metadata"""

    data: Optional[DataSemrushPartnerServiceApi] = UNSET
    """An object describes user status, related to the app"""


class ViewerStatusResponseDict(TypedDict):
    meta: NotRequired[ResponseMetaDict]
    data: NotRequired[DataSemrushPartnerServiceApiDict]
