from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """The reason for the exception."""

    UNAUTHORIZED_ACCOUNT = "UNAUTHORIZED_ACCOUNT"
    DEPENDENCY_ACCESS_DENIED = "DEPENDENCY_ACCESS_DENIED"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
