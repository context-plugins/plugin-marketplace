from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateShortcutMilestonesApi(str, Enum):
    """The workflow state that the Milestone is in."""

    IN_PROGRESS = "in progress"
    TO_DO = "to do"
    DONE = "done"

    __str__ = str.__str__


StateShortcutMilestonesApiOrStr: TypeAlias = Annotated[
    StateShortcutMilestonesApi | str, open_enum_validator(StateShortcutMilestonesApi)
]
