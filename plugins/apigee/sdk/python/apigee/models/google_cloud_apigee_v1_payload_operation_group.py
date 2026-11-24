from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_payload_operation_config import (
    GoogleCloudApigeeV1PayloadOperationConfig,
    GoogleCloudApigeeV1PayloadOperationConfigDict,
)


class GoogleCloudApigeeV1PayloadOperationGroup(SdkBaseModel):
    """List of payload operation configuration details associated with Apigee API proxies. Payload operations enable
    governance of protocols where operations are embedded in the request body (such as JSON-RPC) rather than defined by
    the URL path."""

    operation_configs: Optional[list[GoogleCloudApigeeV1PayloadOperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of payload operation configurations for Apigee API proxies that are associated with this API
    product."""


class GoogleCloudApigeeV1PayloadOperationGroupDict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1PayloadOperationConfigDict]]
