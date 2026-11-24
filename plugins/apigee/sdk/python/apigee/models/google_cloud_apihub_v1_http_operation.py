from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.method import MethodOrStr
from .google_cloud_apihub_v1_path2 import GoogleCloudApihubV1Path2, GoogleCloudApihubV1Path2Dict


class GoogleCloudApihubV1HttpOperation(SdkBaseModel):
    """The HTTP Operation."""

    path: Optional[GoogleCloudApihubV1Path2] = UNSET
    """Optional. The path details for the Operation. Note: Even though this field is optional, it is required for
    CreateApiOperation API and we will fail the request if not provided."""

    method: Optional[MethodOrStr] = UNSET
    """Optional. Operation method Note: Even though this field is optional, it is required for CreateApiOperation API
    and we will fail the request if not provided."""


class GoogleCloudApihubV1HttpOperationDict(TypedDict):
    path: NotRequired[GoogleCloudApihubV1Path2Dict]
    method: NotRequired[MethodOrStr]
