from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_spec import GoogleCloudApihubV1Spec, GoogleCloudApihubV1SpecDict


class GoogleCloudApihubV1ListSpecsResponse(SdkBaseModel):
    """The ListSpecs method's response."""

    specs: Optional[list[GoogleCloudApihubV1Spec]] = UNSET
    """The specs corresponding to an API Version."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListSpecsResponseDict(TypedDict):
    specs: NotRequired[list[GoogleCloudApihubV1SpecDict]]
    next_page_token: NotRequired[str]
