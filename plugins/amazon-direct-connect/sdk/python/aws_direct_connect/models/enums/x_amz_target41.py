from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget41(str, Enum):
    OVERTURE_SERVICE_CREATE_LAG = "OvertureService.CreateLag"

    __str__ = str.__str__


XAmzTarget41OrStr: TypeAlias = Annotated[XAmzTarget41 | str, open_enum_validator(XAmzTarget41)]
