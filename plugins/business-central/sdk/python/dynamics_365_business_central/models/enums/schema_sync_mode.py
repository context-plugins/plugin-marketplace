from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SchemaSyncMode(str, Enum):
    """Schema synchronization mode"""

    ADD = "Add"
    FORCE_SYNC = "Force Sync"

    __str__ = str.__str__


SchemaSyncModeOrStr: TypeAlias = Annotated[SchemaSyncMode | str, open_enum_validator(SchemaSyncMode)]
