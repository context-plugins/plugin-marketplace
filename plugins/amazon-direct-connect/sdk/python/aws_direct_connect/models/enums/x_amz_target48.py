from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget48(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_CONNECTION_LOA = "OvertureService.DescribeConnectionLoa"

    __str__ = str.__str__


XAmzTarget48OrStr: TypeAlias = Annotated[XAmzTarget48 | str, open_enum_validator(XAmzTarget48)]
