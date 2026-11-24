from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_http_operation_config1 import (
    GoogleCloudApihubV1HttpOperationConfig1,
    GoogleCloudApihubV1HttpOperationConfig1Dict,
)


class GoogleCloudApihubV1OperationConfig(SdkBaseModel):
    """API hub Operation config."""

    operation: Optional[str] = UNSET
    """Full API Hub operation resource name:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``"""

    http_operation: Optional[GoogleCloudApihubV1HttpOperationConfig1] = Field(default=UNSET, alias="httpOperation")
    """The HTTP operation config."""


class GoogleCloudApihubV1OperationConfigDict(TypedDict):
    operation: NotRequired[str]
    http_operation: NotRequired[GoogleCloudApihubV1HttpOperationConfig1Dict]
