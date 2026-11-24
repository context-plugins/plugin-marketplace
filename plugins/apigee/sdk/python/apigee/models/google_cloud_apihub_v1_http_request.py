from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_header import GoogleCloudApihubV1Header, GoogleCloudApihubV1HeaderDict


class GoogleCloudApihubV1HttpRequest(SdkBaseModel):
    """An aggregation of HTTP requests."""

    headers: Optional[dict[str, GoogleCloudApihubV1Header]] = UNSET
    """Optional. Unordered map from header name to header metadata"""


class GoogleCloudApihubV1HttpRequestDict(TypedDict):
    headers: NotRequired[dict[str, GoogleCloudApihubV1HeaderDict]]
