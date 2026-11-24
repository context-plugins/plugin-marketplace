from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MigrationStrategy1(str, Enum):
    """The strategy used to conduct the migration."""

    CREATE_NEW = "CREATE_NEW"
    UPDATE_EXISTING = "UPDATE_EXISTING"

    __str__ = str.__str__


MigrationStrategy1OrStr: TypeAlias = Annotated[MigrationStrategy1 | str, open_enum_validator(MigrationStrategy1)]
