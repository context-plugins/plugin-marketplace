from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget26(str, Enum):
    OVERTURE_SERVICE_DELETE_VIRTUAL_INTERFACE = "OvertureService.DeleteVirtualInterface"

    __str__ = str.__str__


XAmzTarget26OrStr: TypeAlias = Annotated[XAmzTarget26 | str, open_enum_validator(XAmzTarget26)]
