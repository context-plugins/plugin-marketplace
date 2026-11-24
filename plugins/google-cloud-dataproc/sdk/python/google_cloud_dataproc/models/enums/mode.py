from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode(str, Enum):
    """Required. Defines the behavior of the migration execution."""

    MIGRATION_MODE_UNSPECIFIED = "MIGRATION_MODE_UNSPECIFIED"
    BACKFILL = "BACKFILL"

    __str__ = str.__str__


ModeOrStr: TypeAlias = Annotated[Mode | str, open_enum_validator(Mode)]
