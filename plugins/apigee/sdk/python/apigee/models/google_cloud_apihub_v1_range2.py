from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_point1 import GoogleCloudApihubV1Point1, GoogleCloudApihubV1Point1Dict
from .google_cloud_apihub_v1_point3 import GoogleCloudApihubV1Point3, GoogleCloudApihubV1Point3Dict


class GoogleCloudApihubV1Range2(SdkBaseModel):
    """Required. Object describing where in the file the issue was found."""

    start: Optional[GoogleCloudApihubV1Point3] = UNSET
    """Required. Start of the issue."""

    end: Optional[GoogleCloudApihubV1Point1] = UNSET
    """Required. End of the issue."""


class GoogleCloudApihubV1Range2Dict(TypedDict):
    start: NotRequired[GoogleCloudApihubV1Point3Dict]
    end: NotRequired[GoogleCloudApihubV1Point1Dict]
