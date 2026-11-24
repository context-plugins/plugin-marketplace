from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category1(str, Enum):
    """Investor category the issue accepts. Pass this value as category when applying"""

    IND = "IND"
    HNI = "HNI"

    __str__ = str.__str__


Category1OrStr: TypeAlias = Annotated[Category1 | str, open_enum_validator(Category1)]
