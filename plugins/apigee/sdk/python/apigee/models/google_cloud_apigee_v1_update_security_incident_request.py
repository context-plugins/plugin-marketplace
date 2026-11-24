from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_incident2 import (
    GoogleCloudApigeeV1SecurityIncident2,
    GoogleCloudApigeeV1SecurityIncident2Dict,
)


class GoogleCloudApigeeV1UpdateSecurityIncidentRequest(SdkBaseModel):
    """Request for UpdateSecurityIncident."""

    security_incident: Optional[GoogleCloudApigeeV1SecurityIncident2] = Field(default=UNSET, alias="securityIncident")
    """Required. The security incident to update. Must contain all existing populated fields of the current incident."""

    update_mask: Optional[str] = Field(default=UNSET, alias="updateMask")
    """Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) -
    observability LINT.ThenChange()"""


class GoogleCloudApigeeV1UpdateSecurityIncidentRequestDict(TypedDict):
    security_incident: NotRequired[GoogleCloudApigeeV1SecurityIncident2Dict]
    update_mask: NotRequired[str]
