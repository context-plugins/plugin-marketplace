from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget32(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAYS = "OvertureService.DescribeDirectConnectGateways"

    __str__ = str.__str__


XAmzTarget32OrStr: TypeAlias = Annotated[XAmzTarget32 | str, open_enum_validator(XAmzTarget32)]
