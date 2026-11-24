from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget31(str, Enum):
    OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY = "OvertureService.DeleteDirectConnectGateway"

    __str__ = str.__str__


XAmzTarget31OrStr: TypeAlias = Annotated[XAmzTarget31 | str, open_enum_validator(XAmzTarget31)]
