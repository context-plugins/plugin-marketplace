from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RcaResourceTypeDto(str, Enum):
    DATASET = "dataset"
    DATASOURCE = "datasource"
    CHECK = "check"
    CHECK_RESULT = "checkResult"

    __str__ = str.__str__


RcaResourceTypeDtoOrStr: TypeAlias = Annotated[RcaResourceTypeDto | str, open_enum_validator(RcaResourceTypeDto)]
