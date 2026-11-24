from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GatewayTypeApigeeProjectsApi(str, Enum):
    """Optional. The type of the gateway."""

    GATEWAY_TYPE_UNSPECIFIED = "GATEWAY_TYPE_UNSPECIFIED"
    APIGEE_X_AND_HYBRID = "APIGEE_X_AND_HYBRID"
    APIGEE_EDGE_PUBLIC_CLOUD = "APIGEE_EDGE_PUBLIC_CLOUD"
    APIGEE_EDGE_PRIVATE_CLOUD = "APIGEE_EDGE_PRIVATE_CLOUD"
    CLOUD_API_GATEWAY = "CLOUD_API_GATEWAY"
    CLOUD_ENDPOINTS = "CLOUD_ENDPOINTS"
    API_DISCOVERY = "API_DISCOVERY"
    OTHERS = "OTHERS"
    AWS_API_GATEWAY = "AWS_API_GATEWAY"
    AZURE_API_MANAGEMENT = "AZURE_API_MANAGEMENT"

    __str__ = str.__str__


GatewayTypeApigeeProjectsApiOrStr: TypeAlias = Annotated[
    GatewayTypeApigeeProjectsApi | str, open_enum_validator(GatewayTypeApigeeProjectsApi)
]
