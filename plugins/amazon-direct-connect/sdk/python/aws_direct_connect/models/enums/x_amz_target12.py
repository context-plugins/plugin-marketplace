from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget12(str, Enum):
    OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE = "OvertureService.ConfirmPublicVirtualInterface"

    __str__ = str.__str__


XAmzTarget12OrStr: TypeAlias = Annotated[XAmzTarget12 | str, open_enum_validator(XAmzTarget12)]
