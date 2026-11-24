from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_external_api import GoogleCloudApihubV1ExternalApi, GoogleCloudApihubV1ExternalApiDict


class GoogleCloudApihubV1ListExternalApisResponse(SdkBaseModel):
    """The ListExternalApis method's response."""

    external_apis: Optional[list[GoogleCloudApihubV1ExternalApi]] = Field(default=UNSET, alias="externalApis")
    """The External API resources present in the API hub."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListExternalApisResponseDict(TypedDict):
    external_apis: NotRequired[list[GoogleCloudApihubV1ExternalApiDict]]
    next_page_token: NotRequired[str]
