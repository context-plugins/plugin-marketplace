from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget13(str, Enum):
    OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE = "OvertureService.ConfirmTransitVirtualInterface"

    __str__ = str.__str__


XAmzTarget13OrStr: TypeAlias = Annotated[XAmzTarget13 | str, open_enum_validator(XAmzTarget13)]
