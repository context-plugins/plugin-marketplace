from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget11(str, Enum):
    OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE = "OvertureService.ConfirmPrivateVirtualInterface"

    __str__ = str.__str__


XAmzTarget11OrStr: TypeAlias = Annotated[XAmzTarget11 | str, open_enum_validator(XAmzTarget11)]
