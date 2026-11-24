from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget19(str, Enum):
    OVERTURE_SERVICE_DISASSOCIATE_CONNECTION_FROM_LAG = "OvertureService.DisassociateConnectionFromLag"

    __str__ = str.__str__


XAmzTarget19OrStr: TypeAlias = Annotated[XAmzTarget19 | str, open_enum_validator(XAmzTarget19)]
