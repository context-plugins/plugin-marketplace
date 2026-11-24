from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_graph_ql_operation_config import (
    GoogleCloudApigeeV1GraphQlOperationConfig,
    GoogleCloudApigeeV1GraphQlOperationConfigDict,
)


class GoogleCloudApigeeV1GraphQlOperationGroup(SdkBaseModel):
    """List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote
    services are non-Apigee proxies, such as Istio-Envoy."""

    operation_config_type: Optional[str] = Field(default=UNSET, alias="operationConfigType")
    """Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include
    ``proxy`` or ``remoteservice``. Defaults to ``proxy``. Set to ``proxy`` when Apigee API proxies are associated with
    the API product. Set to ``remoteservice`` when non-Apigee proxies like Istio-Envoy are associated with the API
    product."""

    operation_configs: Optional[list[GoogleCloudApigeeV1GraphQlOperationConfig]] = Field(
        default=UNSET, alias="operationConfigs"
    )
    """Required. List of operation configurations for either Apigee API proxies or other remote services that are
    associated with this API product."""


class GoogleCloudApigeeV1GraphQlOperationGroupDict(TypedDict):
    operation_config_type: NotRequired[str]
    operation_configs: NotRequired[list[GoogleCloudApigeeV1GraphQlOperationConfigDict]]
