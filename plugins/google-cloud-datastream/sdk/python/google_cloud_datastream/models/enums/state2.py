from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State2(str, Enum):
    """Output only. The state of the Private Connection."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    FAILED = "FAILED"
    DELETING = "DELETING"
    FAILED_TO_DELETE = "FAILED_TO_DELETE"

    __str__ = str.__str__


State2OrStr: TypeAlias = Annotated[State2 | str, open_enum_validator(State2)]
