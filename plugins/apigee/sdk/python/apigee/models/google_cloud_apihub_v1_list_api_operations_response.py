from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api_operation import GoogleCloudApihubV1ApiOperation, GoogleCloudApihubV1ApiOperationDict


class GoogleCloudApihubV1ListApiOperationsResponse(SdkBaseModel):
    """The ListApiOperations method's response."""

    api_operations: Optional[list[GoogleCloudApihubV1ApiOperation]] = Field(default=UNSET, alias="apiOperations")
    """The operations corresponding to an API version."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListApiOperationsResponseDict(TypedDict):
    api_operations: NotRequired[list[GoogleCloudApihubV1ApiOperationDict]]
    next_page_token: NotRequired[str]
