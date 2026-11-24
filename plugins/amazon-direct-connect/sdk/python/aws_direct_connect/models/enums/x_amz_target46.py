from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget46(str, Enum):
    OVERTURE_SERVICE_CREATE_PUBLIC_VIRTUAL_INTERFACE = "OvertureService.CreatePublicVirtualInterface"

    __str__ = str.__str__


XAmzTarget46OrStr: TypeAlias = Annotated[XAmzTarget46 | str, open_enum_validator(XAmzTarget46)]
