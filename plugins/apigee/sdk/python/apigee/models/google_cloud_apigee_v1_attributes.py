from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict


class GoogleCloudApigeeV1Attributes(SdkBaseModel):
    attribute: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """List of attributes."""


class GoogleCloudApigeeV1AttributesDict(TypedDict):
    attribute: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
