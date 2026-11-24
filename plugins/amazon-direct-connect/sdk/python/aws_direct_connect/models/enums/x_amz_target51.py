from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget51(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_INTERCONNECT_LOA = "OvertureService.DescribeInterconnectLoa"

    __str__ = str.__str__


XAmzTarget51OrStr: TypeAlias = Annotated[XAmzTarget51 | str, open_enum_validator(XAmzTarget51)]
