from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_environment_group import (
    GoogleCloudApigeeV1EnvironmentGroup,
    GoogleCloudApigeeV1EnvironmentGroupDict,
)


class GoogleCloudApigeeV1ListEnvironmentGroupsResponse(SdkBaseModel):
    """Response for ListEnvironmentGroups."""

    environment_groups: Optional[list[GoogleCloudApigeeV1EnvironmentGroup]] = Field(
        default=UNSET, alias="environmentGroups"
    )
    """EnvironmentGroups in the specified organization."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no
    subsequent pages exist."""


class GoogleCloudApigeeV1ListEnvironmentGroupsResponseDict(TypedDict):
    environment_groups: NotRequired[list[GoogleCloudApigeeV1EnvironmentGroupDict]]
    next_page_token: NotRequired[str]
