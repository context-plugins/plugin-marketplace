from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget78(str, Enum):
    COMPREHEND_20171127_LIST_FLYWHEEL_ITERATION_HISTORY = "Comprehend_20171127.ListFlywheelIterationHistory"

    __str__ = str.__str__


XAmzTarget78OrStr: TypeAlias = Annotated[XAmzTarget78 | str, open_enum_validator(XAmzTarget78)]
