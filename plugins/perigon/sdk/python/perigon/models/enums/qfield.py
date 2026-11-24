from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Qfield(str, Enum):
    TITLE = "TITLE"
    DESCRIPTION = "DESCRIPTION"
    CONTENT = "CONTENT"
    SUMMARY = "SUMMARY"

    __str__ = str.__str__


QfieldOrStr: TypeAlias = Annotated[Qfield | str, open_enum_validator(Qfield)]
