from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DialingType1(str, Enum):
    """Dialing mode of the group this destination belongs to: ``sequence`` tries it alone, ``ring_all`` dials the whole
    group at once, ``random`` picks group members in a random order. Mirrors ``callhunt`` (``ring_all`` maps to true).
    Takes precedence over ``callhunt``."""

    SEQUENCE = "sequence"
    RING_ALL = "ring_all"
    RANDOM = "random"

    __str__ = str.__str__


DialingType1OrStr: TypeAlias = Annotated[DialingType1 | str, open_enum_validator(DialingType1)]
