from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EvaluationStatusDto(str, Enum):
    PASS = "pass"
    WARN = "warn"
    FAIL = "fail"
    NOT_EVALUATED = "notEvaluated"
    EXCLUDED = "excluded"

    __str__ = str.__str__


EvaluationStatusDtoOrStr: TypeAlias = Annotated[EvaluationStatusDto | str, open_enum_validator(EvaluationStatusDto)]
