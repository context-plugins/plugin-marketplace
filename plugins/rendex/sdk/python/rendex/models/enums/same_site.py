from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SameSite(str, Enum):
    STRICT = "Strict"
    LAX = "Lax"
    NONE = "None"

    __str__ = str.__str__


SameSiteOrStr: TypeAlias = Annotated[SameSite | str, open_enum_validator(SameSite)]
