from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_incident_list_item import CloudIncidentListItem, CloudIncidentListItemDict


class CoreV1CloudincidentsResponse(SdkBaseModel):
    incidents: Optional[list[CloudIncidentListItem]] = UNSET
    """Array of cloud incidents"""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token, returned by a previous call, to request the next page of results"""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Cloud incidents rows count"""


class CoreV1CloudincidentsResponseDict(TypedDict):
    incidents: NotRequired[list[CloudIncidentListItemDict]]
    page_token: NotRequired[str]
    row_count: NotRequired[int]
