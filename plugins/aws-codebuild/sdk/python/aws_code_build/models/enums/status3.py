from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3(str, Enum):
    """The status of the report group. This property is read-only. This can be one of the following values: ACTIVE The
    report group is active. DELETING The report group is in the process of being deleted."""

    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

    __str__ = str.__str__


Status3OrStr: TypeAlias = Annotated[Status3 | str, open_enum_validator(Status3)]
