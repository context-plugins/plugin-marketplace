from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DialingType(str, Enum):
    """Dialing mode of the group this destination belongs to: ``sequence`` tries it alone, ``ring_all`` dials the whole
    group at once, ``random`` picks group members in a random order. Mirrors ``callhunt`` (``ring_all`` maps to
    true)."""

    SEQUENCE = "sequence"
    RING_ALL = "ring_all"
    RANDOM = "random"

    __str__ = str.__str__


DialingTypeOrStr: TypeAlias = Annotated[DialingType | str, open_enum_validator(DialingType)]
