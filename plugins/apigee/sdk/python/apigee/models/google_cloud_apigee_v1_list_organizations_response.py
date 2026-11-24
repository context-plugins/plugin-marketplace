from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_organization_project_mapping import (
    GoogleCloudApigeeV1OrganizationProjectMapping,
    GoogleCloudApigeeV1OrganizationProjectMappingDict,
)


class GoogleCloudApigeeV1ListOrganizationsResponse(SdkBaseModel):
    organizations: Optional[list[GoogleCloudApigeeV1OrganizationProjectMapping]] = UNSET
    """List of Apigee organizations and associated Google Cloud projects."""


class GoogleCloudApigeeV1ListOrganizationsResponseDict(TypedDict):
    organizations: NotRequired[list[GoogleCloudApigeeV1OrganizationProjectMappingDict]]
