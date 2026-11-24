from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_http_operation1 import (
    GoogleCloudApihubV1HttpOperation1,
    GoogleCloudApihubV1HttpOperation1Dict,
)
from .google_cloud_apihub_v1_http_request2 import GoogleCloudApihubV1HttpRequest2, GoogleCloudApihubV1HttpRequest2Dict
from .google_cloud_apihub_v1_http_response2 import (
    GoogleCloudApihubV1HttpResponse2,
    GoogleCloudApihubV1HttpResponse2Dict,
)
from .google_cloud_apihub_v1_path_param import GoogleCloudApihubV1PathParam, GoogleCloudApihubV1PathParamDict
from .google_cloud_apihub_v1_query_param import GoogleCloudApihubV1QueryParam, GoogleCloudApihubV1QueryParamDict


class GoogleCloudApihubV1HttpOperationDetails2(SdkBaseModel):
    """Optional. An HTTP Operation."""

    query_params: Optional[dict[str, GoogleCloudApihubV1QueryParam]] = Field(default=UNSET, alias="queryParams")
    """Optional. Query params of HttpOperation"""

    path_params: Optional[list[GoogleCloudApihubV1PathParam]] = Field(default=UNSET, alias="pathParams")
    """Optional. Path params of HttpOperation"""

    response: Optional[GoogleCloudApihubV1HttpResponse2] = UNSET
    """Optional. Response metadata."""

    request: Optional[GoogleCloudApihubV1HttpRequest2] = UNSET
    """Optional. Request metadata."""

    http_operation: Optional[GoogleCloudApihubV1HttpOperation1] = Field(default=UNSET, alias="httpOperation")
    """Required. An HTTP Operation."""


class GoogleCloudApihubV1HttpOperationDetails2Dict(TypedDict):
    query_params: NotRequired[dict[str, GoogleCloudApihubV1QueryParamDict]]
    path_params: NotRequired[list[GoogleCloudApihubV1PathParamDict]]
    response: NotRequired[GoogleCloudApihubV1HttpResponse2Dict]
    request: NotRequired[GoogleCloudApihubV1HttpRequest2Dict]
    http_operation: NotRequired[GoogleCloudApihubV1HttpOperation1Dict]
