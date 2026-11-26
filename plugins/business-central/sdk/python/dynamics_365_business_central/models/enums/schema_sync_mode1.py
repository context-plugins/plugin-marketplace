from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SchemaSyncMode1(str, Enum):
    ADD = "Add"
    FORCE_SYNC = "Force Sync"

    __str__ = str.__str__


SchemaSyncMode1OrStr: TypeAlias = Annotated[SchemaSyncMode1 | str, open_enum_validator(SchemaSyncMode1)]
