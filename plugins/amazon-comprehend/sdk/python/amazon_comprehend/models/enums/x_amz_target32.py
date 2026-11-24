from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget32(str, Enum):
    COMPREHEND_20171127_DELETE_FLYWHEEL = "Comprehend_20171127.DeleteFlywheel"

    __str__ = str.__str__


XAmzTarget32OrStr: TypeAlias = Annotated[XAmzTarget32 | str, open_enum_validator(XAmzTarget32)]
