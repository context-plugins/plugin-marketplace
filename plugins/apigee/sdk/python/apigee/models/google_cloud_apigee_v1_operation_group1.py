from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_operation_config import (
    GoogleCloudApigeeV1OperationConfig,
    GoogleCloudApigeeV1OperationConfigDict,
)


class GoogleCloudApigeeV1OperationGroup1(SdkBaseModel):
    """Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The
    resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able
    to fine-tune and give precise control over which REST methods have access to specific resources and how many calls
    can be made (using the ``quota`` setting). **Note:** The ``api_resources`` setting cannot be specified for both the
    API product and operation group; otherwise the call will fail."""

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


class GoogleCloudApigeeV1OperationGroup1Dict(TypedDict):
    operation_configs: NotRequired[list[GoogleCloudApigeeV1OperationConfigDict]]
    operation_config_type: NotRequired[str]
