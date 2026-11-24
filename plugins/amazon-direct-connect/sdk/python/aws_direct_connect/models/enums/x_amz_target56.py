from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget56(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_VIRTUAL_GATEWAYS = "OvertureService.DescribeVirtualGateways"

    __str__ = str.__str__


XAmzTarget56OrStr: TypeAlias = Annotated[XAmzTarget56 | str, open_enum_validator(XAmzTarget56)]
