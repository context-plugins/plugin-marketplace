from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Compatibility(str, Enum):
    """The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to
    the report."""

    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"

    __str__ = str.__str__


CompatibilityOrStr: TypeAlias = Annotated[Compatibility | str, open_enum_validator(Compatibility)]
