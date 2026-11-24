from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget62(str, Enum):
    OVERTURE_SERVICE_UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES = "OvertureService.UpdateVirtualInterfaceAttributes"

    __str__ = str.__str__


XAmzTarget62OrStr: TypeAlias = Annotated[XAmzTarget62 | str, open_enum_validator(XAmzTarget62)]
