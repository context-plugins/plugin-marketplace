from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    """The type of insights you are searching for (REACTIVE or PROACTIVE)."""

    REACTIVE = "REACTIVE"
    PROACTIVE = "PROACTIVE"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
