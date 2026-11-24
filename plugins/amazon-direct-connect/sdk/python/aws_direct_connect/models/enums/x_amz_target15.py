from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget15(str, Enum):
    OVERTURE_SERVICE_CREATE_CONNECTION = "OvertureService.CreateConnection"

    __str__ = str.__str__


XAmzTarget15OrStr: TypeAlias = Annotated[XAmzTarget15 | str, open_enum_validator(XAmzTarget15)]
