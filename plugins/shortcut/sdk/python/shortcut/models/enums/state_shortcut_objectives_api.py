from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateShortcutObjectivesApi(str, Enum):
    """The workflow state that the Objective is in."""

    IN_PROGRESS = "in progress"
    TO_DO = "to do"
    DONE = "done"

    __str__ = str.__str__


StateShortcutObjectivesApiOrStr: TypeAlias = Annotated[
    StateShortcutObjectivesApi | str, open_enum_validator(StateShortcutObjectivesApi)
]
