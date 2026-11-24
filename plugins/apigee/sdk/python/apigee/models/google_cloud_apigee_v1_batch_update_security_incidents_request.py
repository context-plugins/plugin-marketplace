from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_update_security_incident_request import (
    GoogleCloudApigeeV1UpdateSecurityIncidentRequest,
    GoogleCloudApigeeV1UpdateSecurityIncidentRequestDict,
)


class GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest(SdkBaseModel):
    """Request for BatchUpdateSecurityIncident."""

    requests: Optional[list[GoogleCloudApigeeV1UpdateSecurityIncidentRequest]] = UNSET
    """Optional. Required. The request message specifying the resources to update. A maximum of 1000 can be modified in
    a batch."""


class GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequestDict(TypedDict):
    requests: NotRequired[list[GoogleCloudApigeeV1UpdateSecurityIncidentRequestDict]]
