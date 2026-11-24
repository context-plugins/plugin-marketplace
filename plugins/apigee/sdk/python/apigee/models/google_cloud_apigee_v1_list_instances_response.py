from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_instance import GoogleCloudApigeeV1Instance, GoogleCloudApigeeV1InstanceDict


class GoogleCloudApigeeV1ListInstancesResponse(SdkBaseModel):
    """Response for ListInstances."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no
    subsequent pages exist."""

    instances: Optional[list[GoogleCloudApigeeV1Instance]] = UNSET
    """Instances in the specified organization."""


class GoogleCloudApigeeV1ListInstancesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    instances: NotRequired[list[GoogleCloudApigeeV1InstanceDict]]
