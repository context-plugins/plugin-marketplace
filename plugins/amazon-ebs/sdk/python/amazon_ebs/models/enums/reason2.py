from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason2(str, Enum):
    """The reason for the exception."""

    SNAPSHOT_NOT_FOUND = "SNAPSHOT_NOT_FOUND"
    GRANT_NOT_FOUND = "GRANT_NOT_FOUND"
    DEPENDENCY_RESOURCE_NOT_FOUND = "DEPENDENCY_RESOURCE_NOT_FOUND"
    IMAGE_NOT_FOUND = "IMAGE_NOT_FOUND"

    __str__ = str.__str__


Reason2OrStr: TypeAlias = Annotated[Reason2 | str, open_enum_validator(Reason2)]
