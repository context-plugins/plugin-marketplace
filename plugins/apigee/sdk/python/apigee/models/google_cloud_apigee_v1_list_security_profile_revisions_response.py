from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_profile import (
    GoogleCloudApigeeV1SecurityProfile,
    GoogleCloudApigeeV1SecurityProfileDict,
)


class GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse(SdkBaseModel):
    """Response for ListSecurityProfileRevisions."""

    security_profiles: Optional[list[GoogleCloudApigeeV1SecurityProfile]] = Field(
        default=UNSET, alias="securityProfiles"
    )
    """List of security profile revisions. The revisions may be attached or unattached to any environment."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApigeeV1ListSecurityProfileRevisionsResponseDict(TypedDict):
    security_profiles: NotRequired[list[GoogleCloudApigeeV1SecurityProfileDict]]
    next_page_token: NotRequired[str]
