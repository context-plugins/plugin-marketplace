from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget42(str, Enum):
    OVERTURE_SERVICE_DELETE_LAG = "OvertureService.DeleteLag"

    __str__ = str.__str__


XAmzTarget42OrStr: TypeAlias = Annotated[XAmzTarget42 | str, open_enum_validator(XAmzTarget42)]
