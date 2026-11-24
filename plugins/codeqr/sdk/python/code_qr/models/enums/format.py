from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format(str, Enum):
    """Filter by QR code format - static or dynamic"""

    STATIC = "static"
    DYNAMIC = "dynamic"

    __str__ = str.__str__


FormatOrStr: TypeAlias = Annotated[Format | str, open_enum_validator(Format)]
