from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RssSelectionMode(str, Enum):
    """How feed articles are selected, by count or time window."""

    COUNT = "count"
    TIME = "time"

    __str__ = str.__str__


RssSelectionModeOrStr: TypeAlias = Annotated[RssSelectionMode | str, open_enum_validator(RssSelectionMode)]
