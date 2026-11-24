from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_generated_spec_api import (
    GoogleCloudApihubV1GeneratedSpecApi,
    GoogleCloudApihubV1GeneratedSpecApiDict,
)


class GoogleCloudApihubV1ListGeneratedSpecApisResponse(SdkBaseModel):
    """Response for ListGeneratedSpecApis."""

    generated_spec_apis: Optional[list[GoogleCloudApihubV1GeneratedSpecApi]] = Field(
        default=UNSET, alias="generatedSpecApis"
    )
    """The tracked APIs for the requested parent, ordered by ``update_time desc``."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve the next page of results; empty when there are no more results."""


class GoogleCloudApihubV1ListGeneratedSpecApisResponseDict(TypedDict):
    generated_spec_apis: NotRequired[list[GoogleCloudApihubV1GeneratedSpecApiDict]]
    next_page_token: NotRequired[str]
