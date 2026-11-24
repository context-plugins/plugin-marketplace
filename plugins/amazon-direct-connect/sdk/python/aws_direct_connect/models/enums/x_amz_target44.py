from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget44(str, Enum):
    OVERTURE_SERVICE_UPDATE_LAG = "OvertureService.UpdateLag"

    __str__ = str.__str__


XAmzTarget44OrStr: TypeAlias = Annotated[XAmzTarget44 | str, open_enum_validator(XAmzTarget44)]
