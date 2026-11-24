from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget37(str, Enum):
    OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION = "OvertureService.UpdateDirectConnectGatewayAssociation"

    __str__ = str.__str__


XAmzTarget37OrStr: TypeAlias = Annotated[XAmzTarget37 | str, open_enum_validator(XAmzTarget37)]
