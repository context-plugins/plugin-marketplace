from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanAction(str, Enum):
    """Output only. The migration plan action for the database."""

    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    SKIP = "SKIP"
    DEPENDENCY_FAILURE = "DEPENDENCY_FAILURE"
    ERROR = "ERROR"

    __str__ = str.__str__


PlanActionOrStr: TypeAlias = Annotated[PlanAction | str, open_enum_validator(PlanAction)]
