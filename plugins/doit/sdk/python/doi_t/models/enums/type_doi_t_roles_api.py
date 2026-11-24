from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTRolesApi(str, Enum):
    """The type of the role (preset or custom)."""

    PRESET = "preset"
    CUSTOM = "custom"

    __str__ = str.__str__


TypeDoiTRolesApiOrStr: TypeAlias = Annotated[TypeDoiTRolesApi | str, open_enum_validator(TypeDoiTRolesApi)]
