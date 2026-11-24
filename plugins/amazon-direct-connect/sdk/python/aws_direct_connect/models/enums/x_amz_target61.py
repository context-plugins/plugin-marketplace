from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget61(str, Enum):
    OVERTURE_SERVICE_UNTAG_RESOURCE = "OvertureService.UntagResource"

    __str__ = str.__str__


XAmzTarget61OrStr: TypeAlias = Annotated[XAmzTarget61 | str, open_enum_validator(XAmzTarget61)]
