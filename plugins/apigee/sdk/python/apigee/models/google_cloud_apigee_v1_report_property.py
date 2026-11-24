from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict


class GoogleCloudApigeeV1ReportProperty(SdkBaseModel):
    property: Optional[str] = UNSET
    """name of the property"""

    value: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """property values"""


class GoogleCloudApigeeV1ReportPropertyDict(TypedDict):
    property: NotRequired[str]
    value: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
