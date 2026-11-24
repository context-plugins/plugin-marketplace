from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget16(str, Enum):
    OVERTURE_SERVICE_DELETE_CONNECTION = "OvertureService.DeleteConnection"

    __str__ = str.__str__


XAmzTarget16OrStr: TypeAlias = Annotated[XAmzTarget16 | str, open_enum_validator(XAmzTarget16)]
