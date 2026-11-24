from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget27(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_VIRTUAL_INTERFACES = "OvertureService.DescribeVirtualInterfaces"

    __str__ = str.__str__


XAmzTarget27OrStr: TypeAlias = Annotated[XAmzTarget27 | str, open_enum_validator(XAmzTarget27)]
