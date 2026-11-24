from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Trigger(str, Enum):
    """Backfill job's triggering reason."""

    TRIGGER_UNSPECIFIED = "TRIGGER_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"

    __str__ = str.__str__


TriggerOrStr: TypeAlias = Annotated[Trigger | str, open_enum_validator(Trigger)]
