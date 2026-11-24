from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget39(str, Enum):
    OVERTURE_SERVICE_DELETE_INTERCONNECT = "OvertureService.DeleteInterconnect"

    __str__ = str.__str__


XAmzTarget39OrStr: TypeAlias = Annotated[XAmzTarget39 | str, open_enum_validator(XAmzTarget39)]
