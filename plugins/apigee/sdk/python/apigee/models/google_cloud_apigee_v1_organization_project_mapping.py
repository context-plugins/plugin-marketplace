from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1OrganizationProjectMapping(SdkBaseModel):
    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Google Cloud project associated with the Apigee organization"""

    project_ids: Optional[list[str]] = Field(default=UNSET, alias="projectIds")
    """DEPRECATED: Use ``project_id``. An Apigee Organization is mapped to a single project."""

    organization: Optional[str] = UNSET
    """Name of the Apigee organization."""

    location: Optional[str] = UNSET
    """Output only. The Google Cloud region where control plane data is located. For more information, see
    https://cloud.google.com/about/locations/."""


class GoogleCloudApigeeV1OrganizationProjectMappingDict(TypedDict):
    project_id: NotRequired[str]
    project_ids: NotRequired[list[str]]
    organization: NotRequired[str]
    location: NotRequired[str]
