from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Type of question result"""

    AIOVERVIEW = "AIOVERVIEW"
    LINK = "LINK"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
