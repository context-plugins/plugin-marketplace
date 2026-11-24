from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GatewayType1(str, Enum):
    """The gateway type for the API Hub deployment."""

    API_HUB_GATEWAY_TYPE_UNSPECIFIED = "API_HUB_GATEWAY_TYPE_UNSPECIFIED"
    APIGEE_X = "APIGEE_X"
    APIGEE_HYBRID = "APIGEE_HYBRID"
    APIGEE_EDGE = "APIGEE_EDGE"
    APIGEE_OPDK = "APIGEE_OPDK"

    __str__ = str.__str__


GatewayType1OrStr: TypeAlias = Annotated[GatewayType1 | str, open_enum_validator(GatewayType1)]
