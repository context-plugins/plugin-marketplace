from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MaxAgeSeconds(int, Enum):
    VALUE_300 = 300

    __str__ = str.__str__


MaxAgeSecondsOrInt: TypeAlias = Annotated[MaxAgeSeconds | int, open_enum_validator(MaxAgeSeconds)]
