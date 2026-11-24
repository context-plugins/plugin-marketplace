from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_space import GoogleCloudApigeeV1Space, GoogleCloudApigeeV1SpaceDict


class GoogleCloudApigeeV1ListSpacesResponse(SdkBaseModel):
    """A response to a ListSpaces request containing the list of organization spaces and a page token for the next
    page."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    spaces: Optional[list[GoogleCloudApigeeV1Space]] = UNSET
    """List of Apigee organization spaces."""


class GoogleCloudApigeeV1ListSpacesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    spaces: NotRequired[list[GoogleCloudApigeeV1SpaceDict]]
