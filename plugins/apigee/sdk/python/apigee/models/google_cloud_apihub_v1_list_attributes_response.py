from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_attribute import GoogleCloudApihubV1Attribute, GoogleCloudApihubV1AttributeDict


class GoogleCloudApihubV1ListAttributesResponse(SdkBaseModel):
    """The ListAttributes method's response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    attributes: Optional[list[GoogleCloudApihubV1Attribute]] = UNSET
    """The list of all attributes."""


class GoogleCloudApihubV1ListAttributesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApihubV1AttributeDict]]
