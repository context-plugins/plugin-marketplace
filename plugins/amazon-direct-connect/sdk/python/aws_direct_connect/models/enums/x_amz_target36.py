from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget36(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS = "OvertureService.DescribeDirectConnectGatewayAssociations"

    __str__ = str.__str__


XAmzTarget36OrStr: TypeAlias = Annotated[XAmzTarget36 | str, open_enum_validator(XAmzTarget36)]
