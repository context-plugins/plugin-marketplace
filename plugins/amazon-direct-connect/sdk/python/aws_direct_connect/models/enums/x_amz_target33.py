from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget33(str, Enum):
    OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY = "OvertureService.UpdateDirectConnectGateway"

    __str__ = str.__str__


XAmzTarget33OrStr: TypeAlias = Annotated[XAmzTarget33 | str, open_enum_validator(XAmzTarget33)]
