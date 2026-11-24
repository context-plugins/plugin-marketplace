from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Style(str, Enum):
    """The style of the gradient. Can be either linear or radial."""

    NO_GRADIENT = "no_gradient"
    LINEAR = "linear"
    RADIAL = "radial"

    __str__ = str.__str__


StyleOrStr: TypeAlias = Annotated[Style | str, open_enum_validator(Style)]
