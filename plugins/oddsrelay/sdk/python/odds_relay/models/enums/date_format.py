from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DateFormat(str, Enum):
    ISO = "iso"
    UNIX = "unix"

    __str__ = str.__str__


DateFormatOrStr: TypeAlias = Annotated[DateFormat | str, open_enum_validator(DateFormat)]
