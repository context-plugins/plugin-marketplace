from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason1(str, Enum):
    """The reason for the exception."""

    ACCOUNT_THROTTLED = "ACCOUNT_THROTTLED"
    DEPENDENCY_REQUEST_THROTTLED = "DEPENDENCY_REQUEST_THROTTLED"
    RESOURCE_LEVEL_THROTTLE = "RESOURCE_LEVEL_THROTTLE"

    __str__ = str.__str__


Reason1OrStr: TypeAlias = Annotated[Reason1 | str, open_enum_validator(Reason1)]
