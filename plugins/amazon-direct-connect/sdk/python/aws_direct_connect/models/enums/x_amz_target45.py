from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget45(str, Enum):
    OVERTURE_SERVICE_CREATE_PRIVATE_VIRTUAL_INTERFACE = "OvertureService.CreatePrivateVirtualInterface"

    __str__ = str.__str__


XAmzTarget45OrStr: TypeAlias = Annotated[XAmzTarget45 | str, open_enum_validator(XAmzTarget45)]
