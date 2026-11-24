from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_property import GoogleCloudApigeeV1Property, GoogleCloudApigeeV1PropertyDict


class GoogleCloudApigeeV1Properties(SdkBaseModel):
    """Message for compatibility with legacy Edge specification for Java Properties object in JSON."""

    property: Optional[list[GoogleCloudApigeeV1Property]] = UNSET
    """List of all properties in the object"""


class GoogleCloudApigeeV1PropertiesDict(TypedDict):
    property: NotRequired[list[GoogleCloudApigeeV1PropertyDict]]
