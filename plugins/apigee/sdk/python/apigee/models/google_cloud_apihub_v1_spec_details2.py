from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_open_api_spec_details2 import (
    GoogleCloudApihubV1OpenApiSpecDetails2,
    GoogleCloudApihubV1OpenApiSpecDetails2Dict,
)


class GoogleCloudApihubV1SpecDetails2(SdkBaseModel):
    """Output only. Details parsed from the spec."""

    open_api_spec_details: Optional[GoogleCloudApihubV1OpenApiSpecDetails2] = Field(
        default=UNSET, alias="openApiSpecDetails"
    )
    """Output only. Additional details apart from ``OperationDetails`` parsed from an OpenAPI spec. The OperationDetails
    parsed from the spec can be obtained by using ListAPIOperations method."""

    description: Optional[str] = UNSET
    """Output only. The description of the spec."""


class GoogleCloudApihubV1SpecDetails2Dict(TypedDict):
    open_api_spec_details: NotRequired[GoogleCloudApihubV1OpenApiSpecDetails2Dict]
    description: NotRequired[str]
