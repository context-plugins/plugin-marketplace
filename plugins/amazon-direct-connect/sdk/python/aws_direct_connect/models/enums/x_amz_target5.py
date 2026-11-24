from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION = "OvertureService.AllocateHostedConnection"

    __str__ = str.__str__


XAmzTarget5OrStr: TypeAlias = Annotated[XAmzTarget5 | str, open_enum_validator(XAmzTarget5)]
