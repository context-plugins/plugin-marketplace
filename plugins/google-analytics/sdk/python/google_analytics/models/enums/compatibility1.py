from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Compatibility1(str, Enum):
    """The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added
    to the report."""

    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"

    __str__ = str.__str__


Compatibility1OrStr: TypeAlias = Annotated[Compatibility1 | str, open_enum_validator(Compatibility1)]
