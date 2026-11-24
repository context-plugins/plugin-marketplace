from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget25(str, Enum):
    OVERTURE_SERVICE_ASSOCIATE_VIRTUAL_INTERFACE = "OvertureService.AssociateVirtualInterface"

    __str__ = str.__str__


XAmzTarget25OrStr: TypeAlias = Annotated[XAmzTarget25 | str, open_enum_validator(XAmzTarget25)]
