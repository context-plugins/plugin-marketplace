from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Subtype1(str, Enum):
    CUSTOM = "CUSTOM"
    WEBSITE = "WEBSITE"
    APP = "APP"
    OFFLINE_CONVERSION = "OFFLINE_CONVERSION"
    LOOKALIKE = "LOOKALIKE"
    ENGAGEMENT = "ENGAGEMENT"

    __str__ = str.__str__


Subtype1OrStr: TypeAlias = Annotated[Subtype1 | str, open_enum_validator(Subtype1)]
