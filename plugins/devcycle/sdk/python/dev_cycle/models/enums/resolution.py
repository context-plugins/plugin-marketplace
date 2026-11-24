from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Resolution(str, Enum):
    """Whether the opt-in status was explicitly set by the user or implicitly defaulted"""

    EXPLICIT = "explicit"
    IMPLICIT = "implicit"

    __str__ = str.__str__


ResolutionOrStr: TypeAlias = Annotated[Resolution | str, open_enum_validator(Resolution)]
