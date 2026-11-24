from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .geometry_reporting_reports_api import GeometryReportingReportsApi, GeometryReportingReportsApiDict


class LocationReportingReportsApi(SdkBaseModel):
    country: Optional[str] = UNSET
    """Country"""

    formatted_address: Optional[str] = Field(default=UNSET, alias="formattedAddress")
    """Address"""

    geometry: Optional[GeometryReportingReportsApi] = UNSET
    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    """Postal Code"""

    route: Optional[str] = UNSET
    """Route Name"""

    route_no: Optional[str] = Field(default=UNSET, alias="routeNo")
    """Route Number"""

    state: Optional[str] = UNSET
    """State"""

    suburb: Optional[str] = UNSET
    """Suburb"""


class LocationReportingReportsApiDict(TypedDict):
    country: NotRequired[str]
    formatted_address: NotRequired[str]
    geometry: NotRequired[GeometryReportingReportsApiDict]
    postal_code: NotRequired[str]
    route: NotRequired[str]
    route_no: NotRequired[str]
    state: NotRequired[str]
    suburb: NotRequired[str]
