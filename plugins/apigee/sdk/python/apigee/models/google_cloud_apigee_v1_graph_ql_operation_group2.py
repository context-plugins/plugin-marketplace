from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_graph_ql_operation_config import (
    GoogleCloudApigeeV1GraphQlOperationConfig,
    GoogleCloudApigeeV1GraphQlOperationConfigDict,
)


class GoogleCloudApigeeV1GraphQlOperationGroup2(SdkBaseModel):
    """Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type
    and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and
    operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on
    all graphQL requests matching the operation type."""

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


class GoogleCloudApigeeV1GraphQlOperationGroup2Dict(TypedDict):
    operation_config_type: NotRequired[str]
    operation_configs: NotRequired[list[GoogleCloudApigeeV1GraphQlOperationConfigDict]]
