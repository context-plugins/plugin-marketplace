from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_version import GoogleCloudApihubV1Version, GoogleCloudApihubV1VersionDict


class GoogleCloudApihubV1ListVersionsResponse(SdkBaseModel):
    """The ListVersions method's response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    versions: Optional[list[GoogleCloudApihubV1Version]] = UNSET
    """The versions corresponding to an API."""


class GoogleCloudApihubV1ListVersionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    versions: NotRequired[list[GoogleCloudApihubV1VersionDict]]
