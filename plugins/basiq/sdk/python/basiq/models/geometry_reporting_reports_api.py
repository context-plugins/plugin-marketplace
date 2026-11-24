from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeometryReportingReportsApi(SdkBaseModel):
    lat: Optional[str] = UNSET
    """Latitude"""

    lng: Optional[str] = UNSET
    """Longitude"""


class GeometryReportingReportsApiDict(TypedDict):
    lat: NotRequired[str]
    lng: NotRequired[str]
