from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget55(str, Enum):
    COMPREHEND_20171127_START_FLYWHEEL_ITERATION = "Comprehend_20171127.StartFlywheelIteration"

    __str__ = str.__str__


XAmzTarget55OrStr: TypeAlias = Annotated[XAmzTarget55 | str, open_enum_validator(XAmzTarget55)]
