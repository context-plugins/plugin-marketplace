from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget14(str, Enum):
    OVERTURE_SERVICE_ASSOCIATE_CONNECTION_WITH_LAG = "OvertureService.AssociateConnectionWithLag"

    __str__ = str.__str__


XAmzTarget14OrStr: TypeAlias = Annotated[XAmzTarget14 | str, open_enum_validator(XAmzTarget14)]
