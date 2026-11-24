from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OutputMode(str, Enum):
    """compact also returns compact sold-listing rows, including bestOfferAccepted, and is limited to 25 cards with
    count <= 60."""

    SUMMARY = "summary"
    COMPACT = "compact"

    __str__ = str.__str__


OutputModeOrStr: TypeAlias = Annotated[OutputMode | str, open_enum_validator(OutputMode)]
