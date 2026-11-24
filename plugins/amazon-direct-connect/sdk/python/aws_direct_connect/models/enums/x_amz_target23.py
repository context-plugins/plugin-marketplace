from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget23(str, Enum):
    OVERTURE_SERVICE_ASSOCIATE_MAC_SEC_KEY = "OvertureService.AssociateMacSecKey"

    __str__ = str.__str__


XAmzTarget23OrStr: TypeAlias = Annotated[XAmzTarget23 | str, open_enum_validator(XAmzTarget23)]
