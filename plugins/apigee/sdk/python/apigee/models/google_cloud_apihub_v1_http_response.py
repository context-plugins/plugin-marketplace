from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_header import GoogleCloudApihubV1Header, GoogleCloudApihubV1HeaderDict


class GoogleCloudApihubV1HttpResponse(SdkBaseModel):
    """An aggregation of HTTP responses."""

    response_codes: Optional[dict[str, str]] = Field(default=UNSET, alias="responseCodes")
    """Optional. Map of status code to observed count"""

    headers: Optional[dict[str, GoogleCloudApihubV1Header]] = UNSET
    """Optional. Unordered map from header name to header metadata"""


class GoogleCloudApihubV1HttpResponseDict(TypedDict):
    response_codes: NotRequired[dict[str, str]]
    headers: NotRequired[dict[str, GoogleCloudApihubV1HeaderDict]]
