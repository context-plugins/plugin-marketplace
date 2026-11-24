from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_operation import GoogleCloudApigeeV1Operation, GoogleCloudApigeeV1OperationDict
from .google_cloud_apigee_v1_quota1 import GoogleCloudApigeeV1Quota1, GoogleCloudApigeeV1Quota1Dict


class GoogleCloudApigeeV1OperationConfig(SdkBaseModel):
    """Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota
    enforcement."""

    operations: Optional[list[GoogleCloudApigeeV1Operation]] = UNSET
    """List of resource/method pairs for the API proxy or remote service to which quota will applied. **Note**:
    Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method
    pair is provided."""

    quota: Optional[GoogleCloudApigeeV1Quota1] = UNSET
    """Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified,
    quota enforcement will not be done."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """Custom attributes associated with the operation."""

    api_source: Optional[str] = Field(default=UNSET, alias="apiSource")
    """Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated."""


class GoogleCloudApigeeV1OperationConfigDict(TypedDict):
    operations: NotRequired[list[GoogleCloudApigeeV1OperationDict]]
    quota: NotRequired[GoogleCloudApigeeV1Quota1Dict]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    api_source: NotRequired[str]
