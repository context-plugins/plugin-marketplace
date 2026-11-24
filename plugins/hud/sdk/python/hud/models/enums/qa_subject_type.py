from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QaSubjectType(str, Enum):
    """What a check judges: a completed evaluation trace, or a task's current version."""

    TRACE = "trace"
    TASK = "task"

    __str__ = str.__str__


QaSubjectTypeOrStr: TypeAlias = Annotated[QaSubjectType | str, open_enum_validator(QaSubjectType)]
