from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_allowed_value import GoogleCloudApihubV1AllowedValue, GoogleCloudApihubV1AllowedValueDict


class GoogleCloudApihubV1EnumAttributeValues2(SdkBaseModel):
    """The attribute values associated with a resource in case attribute data type is enum."""

    values: Optional[list[GoogleCloudApihubV1AllowedValue]] = UNSET
    """Required. The attribute values in case attribute data type is enum."""


class GoogleCloudApihubV1EnumAttributeValues2Dict(TypedDict):
    values: NotRequired[list[GoogleCloudApihubV1AllowedValueDict]]
