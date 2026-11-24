from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget54(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_ROUTER_CONFIGURATION = "OvertureService.DescribeRouterConfiguration"

    __str__ = str.__str__


XAmzTarget54OrStr: TypeAlias = Annotated[XAmzTarget54 | str, open_enum_validator(XAmzTarget54)]
