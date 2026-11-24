from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScopeHudPlatformChecksApi(str, Enum):
    ASSET = "asset"
    TASK = "task"

    __str__ = str.__str__


ScopeHudPlatformChecksApiOrStr: TypeAlias = Annotated[
    ScopeHudPlatformChecksApi | str, open_enum_validator(ScopeHudPlatformChecksApi)
]
