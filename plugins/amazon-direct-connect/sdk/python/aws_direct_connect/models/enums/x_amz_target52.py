from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget52(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_LOA = "OvertureService.DescribeLoa"

    __str__ = str.__str__


XAmzTarget52OrStr: TypeAlias = Annotated[XAmzTarget52 | str, open_enum_validator(XAmzTarget52)]
