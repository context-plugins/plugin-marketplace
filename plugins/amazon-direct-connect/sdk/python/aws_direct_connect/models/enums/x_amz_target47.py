from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget47(str, Enum):
    OVERTURE_SERVICE_CREATE_TRANSIT_VIRTUAL_INTERFACE = "OvertureService.CreateTransitVirtualInterface"

    __str__ = str.__str__


XAmzTarget47OrStr: TypeAlias = Annotated[XAmzTarget47 | str, open_enum_validator(XAmzTarget47)]
