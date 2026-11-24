from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    """Investor category to apply under. Must be one the issue accepts — see ``investors[].category`` in the IPO details
    API"""

    IND = "IND"
    HNI = "HNI"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
