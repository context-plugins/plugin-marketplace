from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_profile_v2 import (
    GoogleCloudApigeeV1SecurityProfileV2,
    GoogleCloudApigeeV1SecurityProfileV2Dict,
)


class GoogleCloudApigeeV1ListSecurityProfilesV2Response(SdkBaseModel):
    """Response for ListSecurityProfilesV2."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    security_profiles_v2: Optional[list[GoogleCloudApigeeV1SecurityProfileV2]] = Field(
        default=UNSET, alias="securityProfilesV2"
    )
    """List of security profiles in the organization."""


class GoogleCloudApigeeV1ListSecurityProfilesV2ResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    security_profiles_v2: NotRequired[list[GoogleCloudApigeeV1SecurityProfileV2Dict]]
