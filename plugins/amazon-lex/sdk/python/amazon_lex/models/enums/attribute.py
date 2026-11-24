from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute(str, Enum):
    """The utterance attribute to sort by."""

    HIT_COUNT = "HitCount"
    MISSED_COUNT = "MissedCount"

    __str__ = str.__str__


AttributeOrStr: TypeAlias = Annotated[Attribute | str, open_enum_validator(Attribute)]
