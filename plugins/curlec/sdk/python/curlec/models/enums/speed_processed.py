from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeedProcessed(str, Enum):
    """Actual processing mode used."""

    INSTANT = "instant"
    NORMAL = "normal"

    __str__ = str.__str__


SpeedProcessedOrStr: TypeAlias = Annotated[SpeedProcessed | str, open_enum_validator(SpeedProcessed)]
