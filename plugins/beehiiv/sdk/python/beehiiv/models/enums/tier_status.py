from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TierStatus(str, Enum):
    """Returns whether or not the tier has any active prices."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


TierStatusOrStr: TypeAlias = Annotated[TierStatus | str, open_enum_validator(TierStatus)]
