from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget43(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_LAGS = "OvertureService.DescribeLags"

    __str__ = str.__str__


XAmzTarget43OrStr: TypeAlias = Annotated[XAmzTarget43 | str, open_enum_validator(XAmzTarget43)]
