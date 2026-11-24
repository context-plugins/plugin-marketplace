from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QaAgentSubjectType(str, Enum):
    """Canonical resources a QA agent can analyze."""

    TRACE = "trace"
    ENVIRONMENT = "environment"
    TASKSET = "taskset"
    TASK = "task"

    __str__ = str.__str__


QaAgentSubjectTypeOrStr: TypeAlias = Annotated[QaAgentSubjectType | str, open_enum_validator(QaAgentSubjectType)]
