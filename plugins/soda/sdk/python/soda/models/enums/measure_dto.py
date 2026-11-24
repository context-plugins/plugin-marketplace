from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MeasureDto(str, Enum):
    TIME = "time"

    __str__ = str.__str__


MeasureDtoOrStr: TypeAlias = Annotated[MeasureDto | str, open_enum_validator(MeasureDto)]
