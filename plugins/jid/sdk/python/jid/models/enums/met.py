from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Met(str, Enum):
    UNKNOWN = "unknown"

    __str__ = str.__str__


MetOrStr: TypeAlias = Annotated[Met | str, open_enum_validator(Met)]
