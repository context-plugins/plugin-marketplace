from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ItemType(str, Enum):
    """Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything."""

    METHODOLOGY = "methodology"
    CHECKS = "checks"
    SPECS = "specs"
    LLMS_TXT = "llms-txt"
    CHECK = "check"
    PAGE = "page"
    ANY = "any"

    __str__ = str.__str__


ItemTypeOrStr: TypeAlias = Annotated[ItemType | str, open_enum_validator(ItemType)]
