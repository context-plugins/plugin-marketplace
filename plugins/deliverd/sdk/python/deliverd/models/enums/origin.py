from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Origin(str, Enum):
    MANUAL = "manual"
    SUGGESTED = "suggested"

    __str__ = str.__str__


OriginOrStr: TypeAlias = Annotated[Origin | str, open_enum_validator(Origin)]
