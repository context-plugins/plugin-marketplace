from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget30(str, Enum):
    OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY = "OvertureService.CreateDirectConnectGateway"

    __str__ = str.__str__


XAmzTarget30OrStr: TypeAlias = Annotated[XAmzTarget30 | str, open_enum_validator(XAmzTarget30)]
