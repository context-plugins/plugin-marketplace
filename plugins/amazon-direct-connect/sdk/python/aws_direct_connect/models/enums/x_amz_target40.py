from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget40(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_INTERCONNECTS = "OvertureService.DescribeInterconnects"

    __str__ = str.__str__


XAmzTarget40OrStr: TypeAlias = Annotated[XAmzTarget40 | str, open_enum_validator(XAmzTarget40)]
