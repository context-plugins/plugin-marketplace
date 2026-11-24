from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_property import GoogleCloudApigeeV1Property, GoogleCloudApigeeV1PropertyDict


class GoogleCloudApigeeV1Properties3(SdkBaseModel):
    """Optional. Key-value pairs that may be used for customizing the environment."""

    property: Optional[list[GoogleCloudApigeeV1Property]] = UNSET
    """List of all properties in the object"""


class GoogleCloudApigeeV1Properties3Dict(TypedDict):
    property: NotRequired[list[GoogleCloudApigeeV1PropertyDict]]
