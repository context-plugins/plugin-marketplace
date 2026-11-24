from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Subtype(str, Enum):
    """The subtype of the custom audience"""

    CUSTOM = "CUSTOM"
    WEBSITE = "WEBSITE"
    APP = "APP"
    OFFLINE_CONVERSION = "OFFLINE_CONVERSION"
    CLAIM = "CLAIM"
    PARTNER = "PARTNER"
    MANAGED = "MANAGED"
    VIDEO = "VIDEO"
    LOOKALIKE = "LOOKALIKE"
    ENGAGEMENT = "ENGAGEMENT"

    __str__ = str.__str__


SubtypeOrStr: TypeAlias = Annotated[Subtype | str, open_enum_validator(Subtype)]
