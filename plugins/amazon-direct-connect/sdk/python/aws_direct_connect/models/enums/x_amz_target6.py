from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE = "OvertureService.AllocatePrivateVirtualInterface"

    __str__ = str.__str__


XAmzTarget6OrStr: TypeAlias = Annotated[XAmzTarget6 | str, open_enum_validator(XAmzTarget6)]
