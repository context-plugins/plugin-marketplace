from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateEquals(str, Enum):
    """Returns only custom medical vocabularies with the specified state. Custom vocabularies are ordered by creation
    date, with the newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are
    returned."""

    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


StateEqualsOrStr: TypeAlias = Annotated[StateEquals | str, open_enum_validator(StateEquals)]
