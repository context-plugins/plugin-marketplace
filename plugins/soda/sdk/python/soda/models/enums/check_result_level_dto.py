from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckResultLevelDto(str, Enum):
    INFO = "info"
    WARNING = "warning"
    CRITICAL = "critical"
    NOT_EVALUATED = "not_evaluated"
    EXCLUDED = "excluded"

    __str__ = str.__str__


CheckResultLevelDtoOrStr: TypeAlias = Annotated[CheckResultLevelDto | str, open_enum_validator(CheckResultLevelDto)]
