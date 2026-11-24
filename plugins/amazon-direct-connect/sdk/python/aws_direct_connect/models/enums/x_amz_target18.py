from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget18(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_CONNECTIONS_ON_INTERCONNECT = "OvertureService.DescribeConnectionsOnInterconnect"

    __str__ = str.__str__


XAmzTarget18OrStr: TypeAlias = Annotated[XAmzTarget18 | str, open_enum_validator(XAmzTarget18)]
