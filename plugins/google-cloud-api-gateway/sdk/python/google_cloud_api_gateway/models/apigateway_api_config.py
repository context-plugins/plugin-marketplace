from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .apigateway_api_config_file import ApigatewayApiConfigFile, ApigatewayApiConfigFileDict
from .apigateway_api_config_grpc_service_definition import (
    ApigatewayApiConfigGrpcServiceDefinition,
    ApigatewayApiConfigGrpcServiceDefinitionDict,
)
from .apigateway_api_config_open_api_document import (
    ApigatewayApiConfigOpenApiDocument,
    ApigatewayApiConfigOpenApiDocumentDict,
)
from .enums.state1 import State1OrStr


class ApigatewayApiConfig(SdkBaseModel):
    """An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API
    Config."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Created time."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of the API Config. Format:
    projects/{project}/locations/global/apis/{api}/configs/{api_config}"""

    openapi_documents: Optional[list[ApigatewayApiConfigOpenApiDocument]] = Field(
        default=UNSET, alias="openapiDocuments"
    )
    """Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be
    included."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Updated time."""

    gateway_service_account: Optional[str] = Field(default=UNSET, alias="gatewayServiceAccount")
    """Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to
    other services. This may either be the Service Account's email (``{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com``)
    or its full resource name (``projects/{PROJECT}/accounts/{UNIQUE_ID}``). This is most often used when the service is
    a GCP resource such as a Cloud Run Service or an IAP-secured service."""

    service_config_id: Optional[str] = Field(default=UNSET, alias="serviceConfigId")
    """Output only. The ID of the associated Service Config (
    https://cloud.google.com/service-infrastructure/docs/glossary#config)."""

    state: Optional[State1OrStr] = UNSET
    """Output only. State of the API Config."""

    grpc_services: Optional[list[ApigatewayApiConfigGrpcServiceDefinition]] = Field(default=UNSET, alias="grpcServices")
    """Optional. gRPC service definition files. If specified, openapi_documents must not be included."""

    managed_service_configs: Optional[list[ApigatewayApiConfigFile]] = Field(
        default=UNSET, alias="managedServiceConfigs"
    )
    """Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See
    https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected
    file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar
    fields are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are
    concatenated. * Singular embedded messages are merged using these rules for nested fields."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more
    details. https://cloud.google.com/compute/docs/labeling-resources"""


class ApigatewayApiConfigDict(TypedDict):
    create_time: NotRequired[str]
    display_name: NotRequired[str]
    name: NotRequired[str]
    openapi_documents: NotRequired[list[ApigatewayApiConfigOpenApiDocumentDict]]
    update_time: NotRequired[str]
    gateway_service_account: NotRequired[str]
    service_config_id: NotRequired[str]
    state: NotRequired[State1OrStr]
    grpc_services: NotRequired[list[ApigatewayApiConfigGrpcServiceDefinitionDict]]
    managed_service_configs: NotRequired[list[ApigatewayApiConfigFileDict]]
    labels: NotRequired[dict[str, str]]
