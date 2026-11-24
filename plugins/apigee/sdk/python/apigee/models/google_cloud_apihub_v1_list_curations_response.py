from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_curation import GoogleCloudApihubV1Curation, GoogleCloudApihubV1CurationDict


class GoogleCloudApihubV1ListCurationsResponse(SdkBaseModel):
    """The ListCurations method's response."""

    curations: Optional[list[GoogleCloudApihubV1Curation]] = UNSET
    """The curation resources present in the API hub."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListCurationsResponseDict(TypedDict):
    curations: NotRequired[list[GoogleCloudApihubV1CurationDict]]
    next_page_token: NotRequired[str]
