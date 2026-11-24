from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_operation_config import (
    GoogleCloudApigeeV1OperationConfig,
    GoogleCloudApigeeV1OperationConfigDict,
)


class GoogleCloudApigeeV1OperationGroup(SdkBaseModel):
    """List of operation configuration details associated with Apigee API proxies or remote services. Remote services
    are non-Apigee proxies, such as Istio-Envoy."""

    operation_configs: Optional[list[GoogleCloudApigeeV1OperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of operation configurations for either Apigee API proxies or other remote services that are
    associated with this API product."""

    operation_config_type: Optional[str] = Field(default=UNSET, alias="operationConfigType")
    """Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include
    ``proxy`` or ``remoteservice``. Defaults to ``proxy``. Set to ``proxy`` when Apigee API proxies are associated with
    the API product. Set to ``remoteservice`` when non-Apigee proxies like Istio-Envoy are associated with the API
    product."""


class GoogleCloudApigeeV1OperationGroupDict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1OperationConfigDict]]
    operation_config_type: NotRequired[str]
