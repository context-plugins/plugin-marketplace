from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_profile import (
    GoogleCloudApigeeV1SecurityProfile,
    GoogleCloudApigeeV1SecurityProfileDict,
)


class GoogleCloudApigeeV1ListSecurityProfilesResponse(SdkBaseModel):
    """Response for ListSecurityProfiles."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    security_profiles: Optional[list[GoogleCloudApigeeV1SecurityProfile]] = Field(
        default=UNSET, alias="securityProfiles"
    )
    """List of security profiles in the organization. The profiles may be attached or unattached to any environment.
    This will return latest revision of each profile."""


class GoogleCloudApigeeV1ListSecurityProfilesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    security_profiles: NotRequired[list[GoogleCloudApigeeV1SecurityProfileDict]]
