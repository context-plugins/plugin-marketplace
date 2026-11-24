from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Icon(str, Enum):
    """The icon for the custom event."""

    INFO = "INFO"
    WARNING = "WARNING"
    CHECKPOINT = "CHECKPOINT"

    __str__ = str.__str__


IconOrStr: TypeAlias = Annotated[Icon | str, open_enum_validator(Icon)]
