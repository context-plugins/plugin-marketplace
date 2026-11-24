from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget35(str, Enum):
    COMPREHEND_20171127_UPDATE_FLYWHEEL = "Comprehend_20171127.UpdateFlywheel"

    __str__ = str.__str__


XAmzTarget35OrStr: TypeAlias = Annotated[XAmzTarget35 | str, open_enum_validator(XAmzTarget35)]
