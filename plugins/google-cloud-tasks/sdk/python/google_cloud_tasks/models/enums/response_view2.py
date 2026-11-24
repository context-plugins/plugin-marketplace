from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResponseView2(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"

    __str__ = str.__str__


ResponseView2OrStr: TypeAlias = Annotated[ResponseView2 | str, open_enum_validator(ResponseView2)]
