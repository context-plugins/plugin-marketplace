from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_payload_operation_config import (
    GoogleCloudApigeeV1PayloadOperationConfig,
    GoogleCloudApigeeV1PayloadOperationConfigDict,
)


class GoogleCloudApigeeV1PayloadOperationGroup2(SdkBaseModel):
    """Optional. Configuration used to group Apigee proxies with payload-based operations and quotas. Unlike
    ``operation_group``, which matches on the URL path, this grouping matches on operation identifiers extracted from
    the request payload (for example, JSON-RPC method and tool names). This enables fine-grained authorization and quota
    enforcement for protocols such as MCP where multiple operations share a single endpoint. **Note:** The ``proxies``
    and ``api_resources`` settings cannot be specified for both the API product and payload operation group; otherwise
    the call will fail."""

    operation_configs: Optional[list[GoogleCloudApigeeV1PayloadOperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of payload operation configurations for Apigee API proxies that are associated with this API
    product."""


class GoogleCloudApigeeV1PayloadOperationGroup2Dict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1PayloadOperationConfigDict]]
