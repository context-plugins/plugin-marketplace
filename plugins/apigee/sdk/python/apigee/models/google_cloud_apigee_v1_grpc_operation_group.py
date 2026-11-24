from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_grpc_operation_config import (
    GoogleCloudApigeeV1GrpcOperationConfig,
    GoogleCloudApigeeV1GrpcOperationConfigDict,
)


class GoogleCloudApigeeV1GrpcOperationGroup(SdkBaseModel):
    """List of gRPC operation configuration details associated with Apigee API proxies."""

    operation_configs: Optional[list[GoogleCloudApigeeV1GrpcOperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of operation configurations for either Apigee API proxies that are associated with this API
    product."""


class GoogleCloudApigeeV1GrpcOperationGroupDict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1GrpcOperationConfigDict]]
