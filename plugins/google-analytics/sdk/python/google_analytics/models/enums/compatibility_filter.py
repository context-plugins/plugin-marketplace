from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CompatibilityFilter(str, Enum):
    """Filters the dimensions and metrics in the response to just this compatibility. Commonly used as
    ``”compatibilityFilter”: “COMPATIBLE”`` to only return compatible dimensions & metrics."""

    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"

    __str__ = str.__str__


CompatibilityFilterOrStr: TypeAlias = Annotated[CompatibilityFilter | str, open_enum_validator(CompatibilityFilter)]
