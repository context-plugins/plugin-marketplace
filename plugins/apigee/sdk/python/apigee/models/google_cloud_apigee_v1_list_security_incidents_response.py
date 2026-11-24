from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_incident import (
    GoogleCloudApigeeV1SecurityIncident,
    GoogleCloudApigeeV1SecurityIncidentDict,
)


class GoogleCloudApigeeV1ListSecurityIncidentsResponse(SdkBaseModel):
    """Response for ListSecurityIncidents."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    security_incidents: Optional[list[GoogleCloudApigeeV1SecurityIncident]] = Field(
        default=UNSET, alias="securityIncidents"
    )
    """List of security incidents in the organization"""


class GoogleCloudApigeeV1ListSecurityIncidentsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    security_incidents: NotRequired[list[GoogleCloudApigeeV1SecurityIncidentDict]]
