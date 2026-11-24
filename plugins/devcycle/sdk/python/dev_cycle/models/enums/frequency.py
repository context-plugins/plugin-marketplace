from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Frequency(str, Enum):
    WEEKLY = "weekly"
    BIWEEKLY = "biweekly"
    MONTHLY = "monthly"

    __str__ = str.__str__


FrequencyOrStr: TypeAlias = Annotated[Frequency | str, open_enum_validator(Frequency)]
