from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_property import GoogleCloudApigeeV1Property, GoogleCloudApigeeV1PropertyDict


class GoogleCloudApigeeV1Properties4(SdkBaseModel):
    """Optional. Properties defined in the Apigee organization profile."""

    property: Optional[list[GoogleCloudApigeeV1Property]] = UNSET
    """List of all properties in the object"""


class GoogleCloudApigeeV1Properties4Dict(TypedDict):
    property: NotRequired[list[GoogleCloudApigeeV1PropertyDict]]
