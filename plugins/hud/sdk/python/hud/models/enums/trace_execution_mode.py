from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TraceExecutionMode(str, Enum):
    EXTERNAL = "external"
    CLOUD = "cloud"
    HOSTED = "hosted"

    __str__ = str.__str__


TraceExecutionModeOrStr: TypeAlias = Annotated[TraceExecutionMode | str, open_enum_validator(TraceExecutionMode)]
