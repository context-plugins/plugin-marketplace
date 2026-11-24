from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PoweredByAlignmentDevCycleManagementProjectsApi(str, Enum):
    CENTER = "center"
    LEFT = "left"
    RIGHT = "right"
    HIDDEN = "hidden"

    __str__ = str.__str__


PoweredByAlignmentDevCycleManagementProjectsApiOrStr: TypeAlias = Annotated[
    PoweredByAlignmentDevCycleManagementProjectsApi | str,
    open_enum_validator(PoweredByAlignmentDevCycleManagementProjectsApi),
]
