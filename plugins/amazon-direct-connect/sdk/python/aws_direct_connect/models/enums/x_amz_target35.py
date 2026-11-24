from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget35(str, Enum):
    OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION = "OvertureService.DeleteDirectConnectGatewayAssociation"

    __str__ = str.__str__


XAmzTarget35OrStr: TypeAlias = Annotated[XAmzTarget35 | str, open_enum_validator(XAmzTarget35)]
