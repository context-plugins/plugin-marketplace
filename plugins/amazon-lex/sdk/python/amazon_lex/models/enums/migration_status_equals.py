from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MigrationStatusEquals(str, Enum):
    """Filters the list to contain only migrations in the specified state."""

    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

    __str__ = str.__str__


MigrationStatusEqualsOrStr: TypeAlias = Annotated[
    MigrationStatusEquals | str, open_enum_validator(MigrationStatusEquals)
]
