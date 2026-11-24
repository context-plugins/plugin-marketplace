from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataQualityStatusDto(str, Enum):
    PASS = "pass"
    WARN = "warn"
    FAIL = "fail"

    __str__ = str.__str__


DataQualityStatusDtoOrStr: TypeAlias = Annotated[DataQualityStatusDto | str, open_enum_validator(DataQualityStatusDto)]
