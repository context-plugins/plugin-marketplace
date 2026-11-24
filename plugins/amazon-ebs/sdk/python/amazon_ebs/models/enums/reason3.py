from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason3(str, Enum):
    """The reason for the exception."""

    DEPENDENCY_SERVICE_QUOTA_EXCEEDED = "DEPENDENCY_SERVICE_QUOTA_EXCEEDED"

    __str__ = str.__str__


Reason3OrStr: TypeAlias = Annotated[Reason3 | str, open_enum_validator(Reason3)]
