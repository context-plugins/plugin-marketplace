from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_grpc_operation_config import (
    GoogleCloudApigeeV1GrpcOperationConfig,
    GoogleCloudApigeeV1GrpcOperationConfigDict,
)


class GoogleCloudApigeeV1GrpcOperationGroup2(SdkBaseModel):
    """Optional. Configuration used to group Apigee proxies with gRPC services and method names. This grouping allows us
    to set quota for a particular proxy with the gRPC service name and method. If a method name is not set, this implies
    quota and authorization are applied to all gRPC methods implemented by that proxy for that particular gRPC
    service."""

    operation_configs: Optional[list[GoogleCloudApigeeV1GrpcOperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of operation configurations for either Apigee API proxies that are associated with this API
    product."""


class GoogleCloudApigeeV1GrpcOperationGroup2Dict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1GrpcOperationConfigDict]]
