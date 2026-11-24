from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_archive_deployment import (
    GoogleCloudApigeeV1ArchiveDeployment,
    GoogleCloudApigeeV1ArchiveDeploymentDict,
)


class GoogleCloudApigeeV1ListArchiveDeploymentsResponse(SdkBaseModel):
    """Response for ListArchiveDeployments method."""

    archive_deployments: Optional[list[GoogleCloudApigeeV1ArchiveDeployment]] = Field(
        default=UNSET, alias="archiveDeployments"
    )
    """Archive Deployments in the specified environment."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no
    subsequent pages exist."""


class GoogleCloudApigeeV1ListArchiveDeploymentsResponseDict(TypedDict):
    archive_deployments: NotRequired[list[GoogleCloudApigeeV1ArchiveDeploymentDict]]
    next_page_token: NotRequired[str]
