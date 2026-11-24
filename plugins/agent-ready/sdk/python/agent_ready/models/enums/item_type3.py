from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ItemType3(str, Enum):
    METHODOLOGY = "methodology"
    CHECKS = "checks"
    SPECS = "specs"
    LLMS_TXT = "llms-txt"
    CHECK = "check"
    PAGE = "page"

    __str__ = str.__str__


ItemType3OrStr: TypeAlias = Annotated[ItemType3 | str, open_enum_validator(ItemType3)]
