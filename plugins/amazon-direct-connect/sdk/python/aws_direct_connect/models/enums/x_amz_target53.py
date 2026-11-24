from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget53(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_LOCATIONS = "OvertureService.DescribeLocations"

    __str__ = str.__str__


XAmzTarget53OrStr: TypeAlias = Annotated[XAmzTarget53 | str, open_enum_validator(XAmzTarget53)]
