from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State7(str, Enum):
    """Current state of the rate plan (draft or published)."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


State7OrStr: TypeAlias = Annotated[State7 | str, open_enum_validator(State7)]
