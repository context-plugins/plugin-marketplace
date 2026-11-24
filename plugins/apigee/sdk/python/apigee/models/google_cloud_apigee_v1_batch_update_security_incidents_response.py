from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_incident import (
    GoogleCloudApigeeV1SecurityIncident,
    GoogleCloudApigeeV1SecurityIncidentDict,
)


class GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse(SdkBaseModel):
    """Response for BatchUpdateSecurityIncident."""

    security_incidents: Optional[list[GoogleCloudApigeeV1SecurityIncident]] = Field(
        default=UNSET, alias="securityIncidents"
    )
    """Output only. Updated security incidents"""


class GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponseDict(TypedDict):
    security_incidents: NotRequired[list[GoogleCloudApigeeV1SecurityIncidentDict]]
