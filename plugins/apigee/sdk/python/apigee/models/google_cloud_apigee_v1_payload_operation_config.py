from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute, GoogleCloudApigeeV1AttributeDict
from .google_cloud_apigee_v1_payload_operation import (
    GoogleCloudApigeeV1PayloadOperation,
    GoogleCloudApigeeV1PayloadOperationDict,
)
from .google_cloud_apigee_v1_quota2 import GoogleCloudApigeeV1Quota2, GoogleCloudApigeeV1Quota2Dict


class GoogleCloudApigeeV1PayloadOperationConfig(SdkBaseModel):
    """Binds the payload operations in an API proxy with the associated quota enforcement."""

    api_source: Optional[str] = Field(default=UNSET, alias="apiSource")
    """Required. Name of the API proxy with which the payload operations and quota are associated."""

    attributes: Optional[list[GoogleCloudApigeeV1Attribute]] = UNSET
    """Optional. Custom attributes associated with the operation."""

    quota: Optional[GoogleCloudApigeeV1Quota2] = UNSET
    """Optional. Quota parameters to be enforced for the operations and API source combination. If none are specified,
    quota enforcement will not be done unless a quota is defined at the API product level."""

    operations: Optional[list[GoogleCloudApigeeV1PayloadOperation]] = UNSET
    """Required. List of payload operations for the API proxy to which quota will be applied."""


class GoogleCloudApigeeV1PayloadOperationConfigDict(TypedDict):
    api_source: NotRequired[str]
    attributes: NotRequired[list[GoogleCloudApigeeV1AttributeDict]]
    quota: NotRequired[GoogleCloudApigeeV1Quota2Dict]
    operations: NotRequired[list[GoogleCloudApigeeV1PayloadOperationDict]]
