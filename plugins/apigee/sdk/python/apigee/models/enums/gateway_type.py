from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GatewayType(str, Enum):
    API_HUB_GATEWAY_TYPE_UNSPECIFIED = "API_HUB_GATEWAY_TYPE_UNSPECIFIED"
    APIGEE_X = "APIGEE_X"
    APIGEE_HYBRID = "APIGEE_HYBRID"
    APIGEE_EDGE = "APIGEE_EDGE"
    APIGEE_OPDK = "APIGEE_OPDK"

    __str__ = str.__str__


GatewayTypeOrStr: TypeAlias = Annotated[GatewayType | str, open_enum_validator(GatewayType)]
